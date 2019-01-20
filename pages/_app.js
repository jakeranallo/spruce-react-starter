import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import ThemeProvider from '../components/ThemeProvider'
import { ModalProvider } from '../components/modal/ModalContext'

import initStore from '../utils/store'

/* debug to log how the store is being used */
export default withRedux(initStore, {
	debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			let pageProps = {}
			if (Component.getInitialProps) {
				pageProps = await Component.getInitialProps(ctx)
			}
			pageProps.query = ctx.query
			return { pageProps }
		}

		render() {
			const { Component, pageProps, store } = this.props
			return (
				<Container>
					<Provider store={store}>
						<ModalProvider>
							<ThemeProvider>
								<Page>
									<Component {...pageProps} />
								</Page>
							</ThemeProvider>
						</ModalProvider>
					</Provider>
				</Container>
			)
		}
	}
)
