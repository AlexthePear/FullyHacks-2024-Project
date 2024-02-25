<script>
	import { authStore } from '../../lib/stores/authStore.js';
	import { authHandlers } from '../../lib/stores/authStore.js';

	let email = '';
	let password = '';

	async function login() {
		try {
			await authHandlers.login(email, password);
		} catch (error) {
			console.error(error);
		}
		// window.location.href = '/';
	}

	//TODO: Add function to check if user already logged in and redirect to home page
</script>

<h1>Login</h1>
<form on:submit|preventDefault={login}>
	<input type="text" name="email" bind:value={email} placeholder="Email" required />
	<input type="password" name="password" bind:value={password} placeholder="Password" required />
	<button type="submit">Login</button>
</form>

