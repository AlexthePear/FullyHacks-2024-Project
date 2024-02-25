<script>
	import { onMount } from 'svelte';
	import { auth } from '../lib/firebase/firebase.client.js';
	import { authStore } from '../lib/stores/authStore.js';
	onMount(() => {
		console.log('layout mounted');
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});
		});
	});
</script>

<slot />
