import React from 'react'
import Link from 'next/link'
import Anime from 'react-anime'

import Button from '../components/Button'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Icon from '../components/Icon'
import Lottie from 'lottie-react-web'
import listening from '../components/animation/listening.json'
import Test from '../components/ThemeTest'

class Index extends React.Component {
	render() {
		return (
			<Box p={4}>
						<Test />
				<Flex wrap mx={-3}>
					<Anime
						opacity={[0, 1]}
						translateY={'1em'}
						delay={(el, index) => index * 100}
					>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={4}>
							<Lottie
								width={"50%"}
								height={"50%"}
								options={{
									animationData: listening
								}}
							/>
							<Anime
								easing="easeOutElastic"
								duration={1000}
								direction="alternate"
								loop={true}
								delay={(el, index) => index * 240}
								translateX="13rem"
								scale={[0.75, 1.5]}
							>
								<Box color="blue">
									<Icon name="envelope" width={24} />
								</Box>
								<Box color="green">
									<Icon name="message" width={24} />
								</Box>
								<Box color="red">
									<Icon name="envelope" width={24} />
								</Box>
							</Anime>
							<Link href="/modals">
								<Button size="large" mr={2}>
									Modals
								</Button>
							</Link>
						</Box>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={4}>
							<Anime
								easing="easeOutElastic"
								duration={1000}
								direction="alternate"
								loop={true}
								delay={(el, index) => index * 240}
								translateX="13rem"
								scale={[0.75, 0.9]}
							>
								<Box color="blue">hi</Box>
								<Box color="green">hi</Box>
								<Box color="red">hi</Box>
							</Anime>
							<Link href="/profile">
								<Button size="large" mr={2}>
									Link
								</Button>
							</Link>
						</Box>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={4}>
							<Anime
								easing="easeOutElastic"
								duration={1000}
								direction="alternate"
								loop={true}
								delay={(el, index) => index * 240}
								translateX="13rem"
								scale={[0.75, 1.5]}
							>
								<Box color="blue">
									<Icon name="envelope" width={24} />
								</Box>
								<Box color="green">
									<Icon name="message" width={24} />
								</Box>
								<Box color="red">
									<Icon name="envelope" width={24} />
								</Box>
							</Anime>
							<Link href="/profile">
								<Button size="large" mr={2}>
									Link
								</Button>
							</Link>
						</Box>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={4}>
							<Anime
								easing="easeOutElastic"
								duration={1000}
								direction="alternate"
								loop={true}
								delay={(el, index) => index * 240}
								translateX="13rem"
								scale={[0.75, 0.9]}
							>
								<Box color="blue">hi</Box>
								<Box color="green">hi</Box>
								<Box color="red">hi</Box>
							</Anime>
							<Link href="/profile">
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

export default Index
