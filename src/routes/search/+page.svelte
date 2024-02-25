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

<form on:submit={handleSumbit}>
    <input type="text" name="q" placeholder="search" bind:value={search_query}/>
    <input type="submit" hidden />
</form>


{#if data != null}
    {#each data.search.anime as anime}
        <div>
            <AnimeTitle anime={anime} />    
        </div>
    {/each}
{/if}

