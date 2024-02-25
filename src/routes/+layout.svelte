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
    <a class="home pink_neon_text" href="/">Home</a>
    <a class="search pink_neon_text" href="/search">Search</a>
    <a class="profile pink_neon_text" href="/profile">Profile</a>  

</nav>

<div class="nav_pusher">
</div>

<slot></slot>

<style>

    .navbar {
    justify-content: space-around;
    font-size: 30px;
    text-align: center;
    justify-content: center;
    align-self: center;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #140420;
    padding: 10px;
    z-index: 100px;
    border-color: white;
    }

    .home{
      color: white;
      padding-right: 20vw;
    }

    .search{
      color: white;
      padding-right: 20vw;

    }
  .profile{
    color:white;
  }

    .nav_pusher{
        height: 70px;
        color: white;
    }
  </style>

