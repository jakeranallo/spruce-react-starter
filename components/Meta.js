import Head from 'next/head'

const Meta = () => (
	<Head>
		<meta
			name="viewport"
			content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
		/>
		<meta
			http-equiv="Content-Security-Policy"
			content="upgrade-insecure-requests"
		/>
		<link rel="manifest" href="../static/manifest.json" />
		<link rel="icon" href="../static/img/favicon.ico" />
		<link rel="stylesheet" type="text/css" href="../static/styles/normalize.css" />
		<link rel="stylesheet" type="text/css" href="../static/styles/global.css" />
		<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"></link>
		<title>Spruce React Starter</title>
	</Head>
)

export default Meta
