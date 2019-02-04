import React, { Component } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import Nav from './Nav'

Router.onRouteChangeStart = () => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => {
	NProgress.done()
}
Router.onRouteChangeError = () => {
	NProgress.done()
}

class Header extends Component {
	render() {
		return <Nav />
	}
}

export default Header
