import React, { Component } from 'react'
import Text from './Text'
import Flex from './Flex'

class Nav extends Component {
	render() {
		return (
			<Flex p={3} align="center" color="white" bg="blue">
				<Text bold mx={2}>
					Hello
				</Text>
				<Text ml="auto" mr={2}>
					<a onClick={this.props.showLoginMenu}>LOGIN</a>
				</Text>
			</Flex>
		)
	}
}

export default Nav
