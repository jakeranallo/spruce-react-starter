import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Anime from 'react-anime'

import Button from '../components/Button'
import Box from '../components/Box'
import Flex from '../components/Flex'

class Profile extends Component {
	render() {
		return (
			<Box p={3}>
				<Head>
					<title>Spruce React Starter | Profile</title>
				</Head>
				<Flex wrap mx={-3}>
					<Anime
						opacity={[0, 1]}
						translateY={'1em'}
						delay={(el, index) => index * 100}
					>
						<Box width={[1, 1 / 2]} px={3} mb={4}>
							<p>This is the profile page.</p>
							<Link href="/">
								<Button size="large" mr={2}>
									Link
								</Button>
							</Link>
						</Box>
						<Box width={[1, 1 / 2]} px={3} mb={4}>
							<p>This is the profile page.</p>
							<Link href="/">
								<Button size="large" mr={2}>
									Link
								</Button>
							</Link>
						</Box>
					</Anime>
				</Flex>
			</Box>
		)
	}
}

export default Profile
