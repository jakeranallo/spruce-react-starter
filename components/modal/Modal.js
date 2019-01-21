import React from 'react'
import Modal from 'react-modal'
import Anime from 'react-anime'
import Link from 'next/link'

import Box from '../Box'
import Button from '../Button'
import Icon from '../Icon'
import Card from '../Card'
import Heading from '../Heading'
import Text from '../Text'
import Flex from '../Flex'
import Lottie from 'lottie-react-web'
import document from '../animation/document.json'

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.8)';
Modal.defaultStyles.overlay.fontFamily = 'Rubik';
Modal.defaultStyles.overlay.width = '100%';
Modal.defaultStyles.content.width = '80%';
Modal.defaultStyles.content.height = 'auto';
Modal.defaultStyles.content.margin = '0 auto';
Modal.defaultStyles.content.padding = '0';
Modal.defaultStyles.content.bottom = 'auto';

export const Modal1 = ({ onRequestClose, closeTimeoutMS, ...otherProps }) => (
	<Modal closeTimeoutMS={250} isOpen onRequestClose={onRequestClose} {...otherProps}>

					<Box p={4}>
				<Flex>
				<Anime
			opacity={[0, 1]}
			translateY={'1em'}
			delay={(el, index) => index * 100}
		>
						<Box width={1}>
						<Heading.h1 lineHeight={'0px'}>Modal Example</Heading.h1>
						<Card
						boxShadowSize='xl'
						borderWidth={0}
						borderRadius={6}
						p={4}
						pt={1}
						mb={3}
						mt={4}>
								<Heading.h2>H2 Heading</Heading.h2>
								<Heading.h3>H3 Heading</Heading.h3>
								<Heading.h4>H4 Heading</Heading.h4>
								<Heading.h5>H5 Heading</Heading.h5>
								<Heading.h6>H6 Heading</Heading.h6>
								<Text.p>Vivamus eleifend mauris id leo mollis fermentum. Sed euismod sed sapien nec convallis. Curabitur egestas tellus eu turpis congue volutpat. In vestibulum non dolor quis mattis. Nulla porta enim elit,<Text.span color='blue'> This is a span element.</Text.span> Suspendisse potenti. Aenean nec diam lacinia, molestie lorem in, malesuada justo. Sed quis auctor arcu, et laoreet dui. Mauris semper risus lorem, a interdum nulla efficitur sit amet.</Text.p>
								<Link href="/modals">
								<Button size="large" onClick={onRequestClose} mr={2}>
									Modals
								</Button>
							</Link>
							<Link href="/profile">
								<Button size="large"onClick={onRequestClose} mr={2}>
									Profile
								</Button>
							</Link>
							</Card>
							<Button onClick={onRequestClose}>Close</Button>
						</Box>
						</Anime>
				</Flex>
			</Box>
	</Modal>
)

export const Modal2 = ({ onRequestClose, closeTimeoutMS, foo, ...otherProps }) => (
	<Modal isOpen closeTimeoutMS={250} onRequestClose={onRequestClose} {...otherProps}>
		<button onClick={onRequestClose}>close</button>
		<div>second modal {foo}</div>
	</Modal>
)
