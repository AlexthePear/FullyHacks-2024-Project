<script>
    import topten from "../lib/components/top_10.svelte";
    import Themes from "../lib/components/themes.svelte";
</script>

<h1 class="main_header pink_neon_text">Welcome to Rate My Openings!</h1>

<h2 class="sub_header pink_neon_text">come rate your favorites</h2>

<div class=themes>
    <img src="https://i.imgur.com/jlC48sU.gif" class="theme_outside" alt="zoro" /> 
    
    <div class="theme_outside theme_outside_two">
        <div class="theme_inside pink_neon_text">
           <h1>theme: A.O.T</h1>
        </div>
    </div>

    <div class="theme_outside theme_outside_three">
        <div class="theme_inside pink_neon_text">
            <h1>theme: Naruto</h1>
        </div>
    </div>  
</div>


<style>
	:global(body) {
		background: black;
	}
	.main_header{
        margin-top: 40px;
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

    .themes{
    display: flex;
    flex-direction: column;
    width: 60vw;
}

    .theme_outside{
        display: center;
        flex: center;
        text-align: center;
        justify-content: center;
        align-self: center;
        margin: 25px;
        width: calc(100%);
        height: 25vh;
        border-radius: 2px;
        box-shadow: 0px 0px 30px 4px #eb21b6;
        border: 1px solid white;
    }

    .theme_inside{
        background-color: purple;
        align-items: flex-end;
        margin: 15px;
        height: 60px;
        font-family: monospace;
        box-shadow: 0px 0px 30px 4px #eb21b6;
        border: 1px solid white;
        border-radius: 2px;
        margin-top: 150px;
        max-width: 300px;
        padding: 5px;

    }

    .theme_outside_one{
        background-image: url(https://i.imgur.com/jlC48sU.gif);
        background-size: cover;
        object-fit: cover;
    }

    .theme_outside_two{
        background-image: url(https://64.media.tumblr.com/78f8e0b2c0a4da234fa60306392f3ed4/cacdd37170f09608-a5/s540x810/abae3cfaa522eb8a7a33c1006fd2b7f0ddb46d3d.gif);
        background-size: cover;
        object-fit: cover;
    }


    .theme_outside_three{
        background-image: url(https://64.media.tumblr.com/96db5eb651eac6e60352a03b294bbb0b/tumblr_mz5e3dlZGC1skm8cio1_500.gif);
        background-size: cover;
        object-fit: cover;
    }


</style>
