<script>
	import Button from "./components/Button/index.svelte";
	import TextField from "./components/TextField/index.svelte";
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
		<TextField label="Standard" />
		<TextField label="Required" required />
		<TextField label="Colored" color="#e91e63" />
		<TextField label="Default Value" defaultValue="Default Text" />
		<TextField label="Full Width" fullWidth />
		<TextField label="Helper Text" helperText="Helper Text" />
		<TextField label="Password" type="password" />
		<TextField label="Multiline" multiline />
		<TextField label="Error" error />
		<TextField label="Error" error helperText="Incorrect entry"/>
	</div>
</main>
