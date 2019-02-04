import React, { Component } from 'react'
import Head from 'next/head'
import Anime from 'react-anime'

import Search from '../components/Search'
import Box from '../components/Box'
import Flex from '../components/Flex'

class SearchPage extends Component {
	render() {
		return (
			<Box>
				<Head>
					<title>Spruce React Starter | Search</title>
				</Head>
				<Flex wrap>
					<Anime
						opacity={[0, 1]}
						translateY={'1em'}
						delay={(el, index) => index * 100}
					>
						<Search />
					</Anime>
				</Flex>
			</Box>
		)
	}
}

export default SearchPage
