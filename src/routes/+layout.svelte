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

<!-- THIS IS NAV BAR TODO: FILL WITH CONTENT AND STYLE -->
<nav class="navbar">
    <a href="/">Home</a>
    <input type="text" placeholder="Search..">
    <button on:click={profile}></button>

</nav>

<div class="nav_pusher"></div>

<slot></slot>

<style>
    .navbar {
    position: fixed;
      top: 0;
      left: 0;
      height: 50px;
      width: 100%;
      background-color: #140420;
      color: white;
      padding: 10px;
      z-index: 100;
    }
    .nav_pusher{
        height: 50px;
    }
  </style>

