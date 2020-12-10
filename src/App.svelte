<script>
	import Button from "./components/Button/index.svelte";
	import TextField from "./components/TextField/index.svelte";
	import Typography from "./components/Typography/index.svelte";
</script>

<style>
	:root {
		--primary: 71, 145, 219;
		--black: 0, 0, 0;
		--white: 255, 255, 255;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 100px;
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
	<div style="width: 100%">
		<Typography variant="h1">h1. Hello</Typography>
		<Typography variant="h2">h2. Hello</Typography>
		<Typography variant="h3">h3. Hello</Typography>
		<Typography variant="h4">h4. Hello</Typography>
		<Typography variant="h5">h5. Hello</Typography>
		<Typography variant="h6">h6. Hello</Typography>
		<Typography variant="h6" color="#ff5252">h6. Hello</Typography>
		<Typography variant="h6" align="center">h6. Hello</Typography>

		<Typography variant="subtitle1">subtitle1. Hello</Typography>
		<Typography variant="subtitle2">subtitle2. Hello</Typography>

		<Typography variant="body1">body1. Hello</Typography>
		<Typography variant="body2">body2. Hello</Typography>

		<Typography variant="caption" display="block">Hello</Typography>
		<Typography variant="button" display="block">Hello</Typography>
		<Typography variant="overline" display="block">Hello</Typography>
	</div>
</main>
