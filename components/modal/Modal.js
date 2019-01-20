import React from 'react'
import Modal from 'react-modal'
import Anime from 'react-anime'
import Link from 'next/link'

import Box from '../Box'
import Button from '../Button'
import Icon from '../Icon'
import Flex from '../Flex'
import Lottie from 'lottie-react-web'
import document from '../animation/document.json'

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.8)';
Modal.defaultStyles.overlay.fontFamily = 'Rubik';
Modal.defaultStyles.overlay.width = '100%';
Modal.defaultStyles.content.width = '60%';
Modal.defaultStyles.content.height = 'auto';
Modal.defaultStyles.content.margin = '0 auto';
Modal.defaultStyles.content.bottom = 'auto';

export const Modal1 = ({ onRequestClose, closeTimeoutMS, ...otherProps }) => (
	<Modal closeTimeoutMS={250} isOpen onRequestClose={onRequestClose} {...otherProps}>

					<Box p={4}>
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
									animationData: document
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
								<Button onClick={onRequestClose} size="large" mr={2}>
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
								<Button onClick={onRequestClose} size="large" mr={2}>
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
								<Button onClick={onRequestClose} size="large" mr={2}>
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
								<Button onClick={onRequestClose} size="large" mr={2}>
									Link
								</Button>
							</Link>
						</Box>
						</Anime>
				</Flex>
			</Box>
			<button onClick={onRequestClose}>close</button>
	</Modal>
)

export const Modal2 = ({ onRequestClose, closeTimeoutMS, foo, ...otherProps }) => (
	<Modal isOpen closeTimeoutMS={250} onRequestClose={onRequestClose} {...otherProps}>
		<button onClick={onRequestClose}>close</button>
		<div>second modal {foo}</div>
	</Modal>
)
