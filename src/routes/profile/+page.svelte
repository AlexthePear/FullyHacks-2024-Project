<script>
	import { authStore } from '../../lib/stores/authStore.js';
	import { authHandlers } from '../../lib/stores/authStore.js';
	async function logout() {
		try {
			await authHandlers.logout();
			window.href.location = '/';
		} catch (error) {
			console.error(error);
		}
	}
	$: {
		if($authStore.currentUser == null) {
			window.location.href = "/login"
		}
	}
</script>

<h1>Profile</h1>
<p>Welcome {$authStore.currentUser ? $authStore.currentUser.email : 'Guest'}</p>

<button on:click={logout}>logout</button>
