import React, { Component } from 'react'
import Text from './Text'
import Flex from './Flex'

class Nav extends Component {
	render() {
		return (
			<Flex p={3} align="center" color="white" bg="blue">
				<Text bold mx={2}>
					Navigation
				</Text>
				<Text ml="auto" mr={2}>
					LOGIN
				</Text>
			</Flex>
		)
	}
}

export default Nav
