import React from 'react'
import axios from 'axios'
import Anime from 'react-anime'

export default class UserList extends React.Component {
	state = {
		users: [],
		isLoading: true,
		errors: null
	}

	async getUsers() {
		await axios
			.get('https://randomuser.me/api/?results=5')
			.then(response =>
				response.data.results.map(user => ({
					name: `${user.name.first} ${user.name.last}`,
					username: `${user.login.username}`,
					email: `${user.email}`,
					image: `${user.picture.thumbnail}`
				}))
			)
			.then(users => {
				this.setState({
					users,
					isLoading: false
				})
			})
			.catch(error => this.setState({ error, isLoading: false }))
	}

	componentDidMount() {
		this.getUsers()
	}

	render() {
		const { isLoading, users } = this.state
		return (
			<div>
				{!isLoading ? (
					users.map(user => {
						const { username, name, email, image } = user
						return (
							<Anime
								opacity={[0, 1]}
								translateY={'26px'}
								delay={(el, index) => index * 100}
							>
								<div key={username}>
									<p>{name}</p>
									<div>
										<img src={image} alt={name} />
									</div>
									<p>{email}</p>
									<hr />
								</div>
							</Anime>
						)
					})
				) : (
					<p>Loading...</p>
				)}
			</div>
		)
	}
}
