<script>
	// import { authStore } from '../../stores/authStore.js';
	import { authHandlers } from '../../lib/stores/authStore.js';

	let email = '';
	let password = '';
	let error_string = '';
	async function signup() {
		try {
			await authHandlers.signup(email, password);
			await authHandlers.login(email, password);
			error_string = '';
		} catch (error) {
			console.error(error);
			error_string = error.message;
		}
		if (error_string == '') {
			window.location.href = '/profile';
		}
	}

</script>

<h1 class="title teal_glow">Sign Up</h1>

<h2 class="sub_title teal_glow">welcome to rate my openings </h2>

<form on:submit|preventDefault={signup}>
	<input type="text" class="user_input" bind:value={email} placeholder="Email" required />
	<input type="password" class="user_input" bind:value={password} placeholder="Password" required />
	<button type="submit" class="login">Sign Up</button>
	{#if error_string != ''}
		<p class="teal_glow">Invalid Input</p>
	{/if}
</form>

<style>

	:global(body){
		background-color: black;
	}
	.title{
		font-size: 60px;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: monospace;
	}

	.sub_title{
		font-size: 30px;
		text-align: center;
		margin-bottom: 40px;
	}

	.teal_glow{
		color: white;
        text-shadow: 0 0 10px teal,
        0 0 20px teal,
        0 0 40px teal,
        0 0 80px teal,
        0 0 120px teal,
        0 0 200px teal,
        0 0 300px teal,
        0 0 400px teal,
		0 0 700px teal;
	}
	form {
		display: flex;
		flex-direction: column;
	}
	.user_input{
		
		display: flex;
		flex: center;
		align-items: center;
    	align-self: center;
    	justify-content: center;
    	text-align: center;
		margin: 40px;
		font-size: 50px;
		border-radius: 1px;
		font-family: monospace;
		box-shadow: 0px 0px 10px teal,
		0px 0px 20px teal,
		0px 0px 30px teal,
		0px 0px 40px teal,
		0px 0px 50px teal;
	}

	.login{
		display: flex;
		flex: center;
		align-items: center;
    	align-self: center;
    	justify-content: center;
    	text-align: center;
		font-size: 30px;
		padding: 20px;
		border-radius: 1px;
		margin-top: 30px;
		max-width: 200px;
		box-shadow: 0px 0px 10px teal,
		0px 0px 20px teal,
		0px 0px 30px teal,
		0px 0px 40px teal,
		0px 0px 50px teal;
	}








</style>
