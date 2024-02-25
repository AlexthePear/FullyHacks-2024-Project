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
<nav class="navbar home_btn">
    <a class="home" href="/">Home</a>
    <input type="text" placeholder="Search.." class="search_bar">
    <button class="profile" on:click={profile}> profile</button>

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
      font-size: 30px;
      background-color: #431361;
      border: 1px solid white;
      box-shadow: 0px 0px 30px 4px #eb21b6;
      color: white;
      padding: 10px;
      z-index: 100;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

    }
    .nav_pusher{
        height: 50px;
    }
  
    .search_bar{
      font-size: 20px;
      padding-left: 15px;
      font-family: monospace;
      box-shadow: 0px 0px 30px 2px #eb21b6;
    }

    .profile{
      font-size: 20px;
      font-family: monospace;
      padding-left: 15px;
      padding-right: 15px;
      box-shadow: 0px 0px 30px 2px #eb21b6;
    }

    .home{
      color: white;
      margin-top: 5px;
      font-size: 40px;
    }

  </style>

