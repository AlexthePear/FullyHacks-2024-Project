<script>
	import { authStore } from '../../lib/stores/authStore.js';
	current_user = authStore.currentUser;
	authStore.subscribe((curr) => {
		console.log(authStore.currentUser);
	});
</script>

<h1>Profile</h1>
<p>Welcome current_user</p>
