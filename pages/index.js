import React from 'react'
import Link from 'next/link'
import Anime from 'react-anime'

import Button from '../components/Button'
import Box from '../components/Box'
import Card from '../components/Card'
import Text from '../components/Text'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import FormField from '../components/FormField'
import Input from '../components/Input'
import Tooltip from '../components/Tooltip'
import Label from '../components/Label'
import Select from '../components/Select'
import Icon from '../components/Icon'
import Lottie from 'lottie-react-web'
import listening from '../components/animation/listening.json'

class Index extends React.Component {
	render() {
		return (
			<Box>
				<Flex wrap m={-2} mt={-4}>
					<Anime
						opacity={[0, 1]}
						translateY={'26px'}
						delay={(el, index) => index * 100}
					>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} p={2}>
						<Card
						boxShadowSize='xl'
						borderWidth={0}
						borderRadius={6}
						p={4}
						pt={1}>
								<Heading.h1>H1 Heading</Heading.h1>
								<Heading.h2>H2 Heading</Heading.h2>
								<Heading.h3>H3 Heading</Heading.h3>
								<Heading.h4>H4 Heading</Heading.h4>
								<Heading.h5>H5 Heading</Heading.h5>
								<Heading.h6>H6 Heading</Heading.h6>
								<Text.p>Vivamus eleifend mauris id leo mollis fermentum. Sed euismod sed sapien nec convallis. Curabitur egestas tellus eu turpis congue volutpat. In vestibulum non dolor quis mattis. Nulla porta enim elit,<Text.span color='blue'> This is a span element.</Text.span> Suspendisse potenti. Aenean nec diam lacinia, molestie lorem in, malesuada justo. Sed quis auctor arcu, et laoreet dui. Mauris semper risus lorem, a interdum nulla efficitur sit amet.</Text.p>
								<Link href="/modals">
								<Button size="large" mr={2}>
									Modals
								</Button>
							</Link>
							<Link href="/profile">
								<Button size="large" mr={2}>
									Profile
								</Button>
							</Link>
							</Card>
						</Box>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} p={2}>
						<Card
						boxShadowSize='xl'
						borderWidth={0}
						borderRadius={6}
						p={4}
						pt={1}>
														<Heading.h1>Lottie Example</Heading.h1>
						<Lottie
								width={"50%"}
								height={"50%"}
								options={{
									animationData: listening
								}}
							/>
							</Card>
						</Box>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} p={2}>
						<Card
						boxShadowSize='xl'
						borderWidth={0}
						borderRadius={6}
						p={4}
						pt={1}>
														<Heading.h1>SVG Example</Heading.h1>
								<Box color="blue">
									<Icon name="envelope" width={46} />
								</Box>
								<Box color="green">
									<Icon name="message" width={46} />
								</Box>
								<Box color="red">
									<Icon name="envelope" width={46} />
								</Box>
							</Card>
						</Box>
						<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} p={2}>
						<Card
						boxShadowSize='xl'
						borderWidth={0}
						borderRadius={6}
						p={4}
						pt={1}>
							<Heading.h1>Form Example</Heading.h1>
							<form>
							<Label htmlFor="cabinClass" m={2}>Cabin Class</Label>
							<Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy" mb={3}>
								<option>Economy</option>
								<option>Premium Economy</option>
								<option>Business</option>
								<option>First Class</option>
								<option>
									With a super long label that doesn't get clobbered by the chevron
								</option>
								</Select>
								<Box mb={3}>
								<Input
										value='hello@example'
									/>
																	<Tooltip
								bottom
								right
								color='white'
								bg='red'>
								Invalid Email Address
								</Tooltip>
								</Box>
								<Button fullWidth size="large" mr={2}>
									Submit
								</Button>
							</form>
							</Card>
						</Box>
					</Anime>
				</Flex>
			</Box>
		)
	}
}

export default Index
