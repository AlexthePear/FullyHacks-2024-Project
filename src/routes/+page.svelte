<script>
    import Top_10 from "../lib/components/top_10.svelte";
</script>

<h1 class="main_header pink_neon_text">Welcome to Rate My Openings!</h1>

<h2 class="sub_header pink_neon_text">come rate your favorites</h2>


<Top_10/>

<style>
	:global(body) {
		background: black;
	}
	.main_header{
		font-size: 50px;
		font-family: 'Courier New', Courier, monospace;
		padding: 20px 10px;
        text-align:center;

	}

    .sub_header{
        text-align:center;
        padding: 30px;
    }

    :global(.pink_neon_text){
        color: white;
        padding: 0px;
        margin: 0px;
        text-shadow: 0 0 10px #eb21b6,
        0 0 20px #eb21b6,
        0 0 40px #eb21b6,
        0 0 80px #eb21b6,
        0 0 120px #eb21b6,
        0 0 200px #eb21b6;
    }

    :global(.blue_neon_text){
        padding: 0px;
        margin: 0px;
        color: white;
        text-shadow: 0 0 10px #32a1c6,
        0 0 20px #32a1c6,
        0 0 40px #32a1c6,
        0 0 80px #32a1c6,
        0 0 120px #32a1c6,
        0 0 200px #32a1c6,
        0 0 300px #32a1c6,
        0 0 400px #32a1c6;
    }

</style>
