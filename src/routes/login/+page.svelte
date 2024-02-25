<script>
	import { authStore } from '../../lib/stores/authStore.js';
	import { authHandlers } from '../../lib/stores/authStore.js';
	let email = '';
	let password = '';

	async function login() {
		try {
			await authHandlers.login(email, password);
			window.location.href = '/profile';
		} catch (error) {
			console.error(error);
		}
		// window.location.href = '/';
	}

	//TODO: Add function to check if user already logged in and redirect to home page
</script>
<h2 class="first_header purple_neon_text">
	already have an account?
</h2>
<h1 class="header">Login</h1>
<form on:submit|preventDefault={login}>
	<input type="text" class="user_login_input purple_neon_box" bind:value={email} placeholder="Email" required />
	<input type="password" class="user_login_input purple_neon_box" bind:value={password} placeholder="Password" required />
	<button type="submit" class="login_btn purple_neon_box">Login</button>
</form>


<style>
	:global(body){
		background-color: black;
	}
	form{
		display: flex;
		flex-direction: column;
	}
	.first_header{
		margin-top: 50px;
		font-size: 30px;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: monospace;
	}

	.header{
		color: white;
		font-size: 50px;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: monospace;
		text-shadow: 0px 0px 10px purple,
		0px 0px 20px purple,
		0px 0px 30px purple,
		0px 0px 40px purple,
		0px 0px 50px purple;
	}

	.user_login_input{
		align-items: center;
    	align-self: center;
    	justify-content: center;
    	text-align: center;
		margin: 40px;
		font-size: 50px;
		border-radius: 1px;
		font-family: monospace;

	}

	.purple_neon_box{
		color:white;
		box-shadow: 0px 0px 10px purple,
		0px 0px 20px purple,
		0px 0px 30px purple,
		0px 0px 40px purple,
		0px 0px 50px purple;
	}

	.purple_neon_text{
		color:white;
		text-shadow: 0px 0px 10px purple,
		0px 0px 20px purple,
		0px 0px 30px purple,
		0px 0px 40px purple,
		0px 0px 50px purple;
	}
	
	.login_btn{
		display: flex;
		flex: center;
		align-items: center;
    	align-self: center;
    	justify-content: center;
    	text-align: center;
		color:black;
		font-size: 30px;
	}

</style>