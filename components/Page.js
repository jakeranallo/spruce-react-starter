import React, { Component } from 'react'
import Box from './Box'
import Header from './Header'
import Meta from './Meta'

class Page extends Component {
	render() {
		return (
			<>
				<Meta />
				<Header />
				<Box p={4}>{this.props.children}</Box>
			</>
		)
	}
}

export default Page
