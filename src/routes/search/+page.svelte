<script>
	import AnimeTitle from "../../lib/components/anime_title.svelte";

    let search_query = "";  
    let api_url = `https://api.animethemes.moe/search?q="${search_query}"`;

    $: api_url = `https://api.animethemes.moe/search?q="${search_query}"`


    let data = null;
    async function handleSumbit(event) {
            try {
            let res = await fetch(api_url);
            if (!res.ok) { // res.ok checks if HTTP status is 200-299
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            data = await res.json();
            console.log(data);  
            console.log(data.search.anime)
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
        }
        
    }

    
</script>

<form class="form" on:submit={handleSumbit}>
    <h2 class="intro blue_neon_text"> welcome to our search page</h2>
    <h2 class="intro_two blue_neon_text ">seach for your anime!</h2>
    <div class="totoro"></div>
    <input type="text" name="q" placeholder="search" class="search_bar" bind:value={search_query}/>
    <input type="submit" hidden />
</form>


{#if data != null}
    {#each data.search.anime as anime}
        <div>
            <AnimeTitle anime={anime} />    
        </div>
    {/each}
{/if}

<style>
    .form{
        display: flex;
        flex: center;
        flex-direction: column;
    }

    .totoro{
    background-image: url(https://66.media.tumblr.com/2e4d4afa81aec4f235992d3b00dea57f/tumblr_mqq8pwRzOp1rfjowdo1_500.gif);
      background-size: cover;
      object-fit: cover;
        min-width: 500px;
        min-height: 200px;
        margin-bottom: 14px;
        display: flex;
        flex: center;
        text-align: center;
        justify-content: center;
        align-self: center;
    }

    .search_bar{
        background-color: white;
        font-size: 50px;
        display: center;
        flex: center;
        text-align: center;
        justify-content: center;
        align-self: center;
        border-radius: 5px;
        box-shadow: 0px 0px 30px 4px #32a1c6;
    }



    .intro{
        color: white;
        text-align: center;
        font-size: 40px;
        font-family: 'Courier New', Courier, monospace;
        margin-bottom: 15px;
    }

    .intro_two{
        color: white;
        text-align: center;
        margin-bottom: 40px;
    }
</style>

