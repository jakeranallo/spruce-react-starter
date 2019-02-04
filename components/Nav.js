import React, { Component } from 'react'
import Link from 'next/link'

import Text from './Text'
import Flex from './Flex'
import Box from './Box'
import StyledLink from './StyledLink'

class Nav extends Component {
	render() {
		return (
			<Flex p={3} align="center" color="white" bg="blue">
				<Text bold mx={2}>
				<Link href="/">
					<StyledLink color="white">Home</StyledLink>
					</Link>
				</Text>

				<Box ml={'auto'} mr={2}>
					<Link href="/modals">
						<StyledLink ml={3} color="white">
							Modals
						</StyledLink>
					</Link>
				</Box>

				<Box mr={2}>
					<Link href="/search">
						<StyledLink ml={3} color="white">
							Search
						</StyledLink>
					</Link>
				</Box>

				<Box mr={2}>
					<Link href="/profile">
						<StyledLink ml={3} color="white">
							Profiles
						</StyledLink>
					</Link>
				</Box>
			</Flex>
		)
	}
}

export default Nav
