import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from '../components/Button'
import Box from '../components/Box'
import Card from '../components/Card'
import Heading from '../components/Heading'
import Input from '../components/Input'
import StyledLink from './StyledLink'
import Text from '../components/Text'

const useDataApi = (initialUrl, initialData) => {
	const [data, setData] = useState(initialData)
	const [url, setUrl] = useState(initialUrl)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	const fetchData = async () => {
		setIsError(false)
		setIsLoading(true)

		try {
			const result = await axios(url)

			setData(result.data)
		} catch (error) {
			setIsError(true)
		}

		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [url])

	//Preventing default browser refresh on form submission.

	const doGet = (event, url) => {
		setUrl(url)
		event.preventDefault()
	}

	return { data, isLoading, isError, doGet }
}

function Search() {
	const [query, setQuery] = useState('redux')
	const { data, isLoading, isError, doGet } = useDataApi(
		'http://hn.algolia.com/api/v1/search?query=redux',
		{ hits: [] }
	)

	return (
		<>
			<Card
				boxShadowSize="xl"
				borderWidth={0}
				borderRadius={6}
				p={4}
				width={1}
				mb={4}
			>
				<form
					onSubmit={event =>
						doGet(event, `http://hn.algolia.com/api/v1/search?query=${query}`)
					}
				>
					<Input
						type="text"
						value={query}
						onChange={event => setQuery(event.target.value)}
						mb={3}
					/>
					<Button type="submit">Search</Button>
				</form>
			</Card>
			<Card boxShadowSize="xl" borderWidth={0} borderRadius={6} p={4} width={1}>
				{isError && <div>Something went wrong ...</div>}

				{isLoading ? (
					<Heading.h2>Loading ...</Heading.h2>
				) : (
					<Box>
						{data.hits.map(item => (
							<Text mb={3} key={item.objectID}>
								<StyledLink href={item.url}>{item.title}</StyledLink>
							</Text>
						))}
					</Box>
				)}
			</Card>
		</>
	)
}

export default Search
