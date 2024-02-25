<script>
	// import { authStore } from '../../stores/authStore.js';
	import { authHandlers } from '../../lib/stores/authStore.js';

	let email = '';
	let password = '';

	function signup() {
		authHandlers.signup(email, password);
		authHandlers.login(email, password);
	}
</script>

<h1>Sign Up</h1>
<form on:submit|preventDefault={signup}>
	<input type="text" name="email" bind:value={email} placeholder="Email" required />
	<input type="password" name="password" bind:value={password} placeholder="Password" required />
	<button type="submit">Sign Up</button>
</form>
