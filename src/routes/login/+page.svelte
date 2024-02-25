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
	<h3 class="sign_up_text purple_neon_text"> if not sign up here</h3>
	<a class="sign_up_btn purple_neon_text" href="http://localhost:5173/signup">sign up</a>
</form>


<style>
	:global(body){
		background-color: black;
		color:black;
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
		color: black;

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

	.sign_up_text{
		color:white;
		margin-left: 15vw;
		margin-top: 10px;
	}

	.sign_up_btn{
		color: white;
		font-size: 30px;
		margin-left: 17vw;
		box-shadow: 0px 0px 30px 4px #eb21b6;
		padding: 15px;
		border-color: 2px white;
		max-width: 11vw;
		text-align: center;
	}

</style>