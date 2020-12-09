<script>
	import Button from "./components/Button/index.svelte";
	import TextField from "./components/TextField/index.svelte";
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
	<div style="width: 100%">
		<TextField label="Standard" />
		<TextField label="Required" required />
		<TextField label="Colored" color="#e91e63" />
		<TextField label="Default Value" defaultValue="Default Text" />
		<TextField label="Full Width" fullWidth />
		<TextField label="Helper Text" helperText="Helper Text" />
		<TextField label="Password" type="password" />
	</div>
</main>
