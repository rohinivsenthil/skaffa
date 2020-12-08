<script>
	import Button from "./components/Button/index.svelte";
	export let name;
</script>

<style>
	:root {
		--primary: 71, 145, 219;
		--black: 0, 0, 0;
		--white: 255, 255, 255;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Helvetica:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
	rel="stylesheet" />
<link
	href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
	rel="stylesheet" />
<link
	href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
	rel="stylesheet" />

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<h3>Contained</h3>
	<Button>button</Button>
	<Button color="#673ab7">button</Button>
	<Button disabled>button</Button>
	<h3>Outlined</h3>
	<Button variant="outlined">button</Button>
	<Button variant="outlined" disabled>button</Button>
	<h3>Text</h3>
	<Button variant="text">button</Button>
	<Button variant="text" disabled>button</Button>
	<h3>Full width</h3>
	<Button fullWidth>button</Button>
	<h3>Disable elevation</h3>
	<Button disableElevation>button</Button>
	<h3>Sizes</h3>
	<Button size="small">Small</Button>
	<Button>medium</Button>
	<Button size="large">large</Button>
</main>
