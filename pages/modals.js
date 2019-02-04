import React from 'react'
import Head from 'next/head'

import Button from '../components/Button'
import Box from '../components/Box'
import ModalRoot from '../components/modal/ModalRoot'
import { Modal1, Modal2 } from '../components/modal/Modal'
import { ModalConsumer } from '../components/modal/ModalContext'

const Modals = () => (
	<>
		<Head>
			<title>Spruce React Starter | Modals</title>
		</Head>
		<ModalRoot />
		<ModalConsumer>
			{({ showModal }) => (
				<Box>
					<Button mr={2} onClick={() => showModal(Modal1)}>
						Open Modal
					</Button>
					<Button onClick={() => showModal(Modal2, { foo: 'bar' })}>
						Open Second Modal
					</Button>
				</Box>
			)}
		</ModalConsumer>
	</>
)

export default Modals
