import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Anime from 'react-anime'

import Counter from '../components/Counter'
import Box from '../components/Box'
import Flex from '../components/Flex'
import UserList from '../components/UserList'

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
						<UserList />
						<Counter />
					</Anime>
				</Flex>
			</Box>
		)
	}
}

export default Profile
