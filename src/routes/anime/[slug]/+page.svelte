<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte';

    let slug;
    $: slug = $page.params.slug
                    
    let api_url = `https://api.animethemes.moe/anime/${slug}?include=animethemes.song`;

    $: api_url = `https://api.animethemes.moe/anime/${slug}?include=animethemes.song`;

    let data = null;
    async function run() {
        try {
        let res = await fetch(api_url);
        if (!res.ok) { // res.ok checks if HTTP status is 200-299
            throw new Error(`HTTP error! status: ${res.status}`);
        }   
        data = await res.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error); 
    }
       console.log(data);
    }
    onMount( () => {
        run();
        
    })
</script>

{#if data == null}
    <h1>Loading...</h1>
{:else}
    <h1 class="pink_neon_text">{data.anime.name}</h1>
    <p>{@html data.anime.synopsis}</p>
    <h2 class="blue_neon_text">Themes</h2>
    {#each data.anime.animethemes as theme}
        <a href={`/anime/${slug}/${theme.id}`}>
        <h3>{theme.slug} </h3>
        <h4>{theme.song.title}</h4>
        </a>    

    {/each}
{/if }

<style>
    h3 {
        margin-right: 5px;
    }
    a {
        color: white;
        text-decoration: none;
        display: flex;
        width: 80%;
        height: 60px;
        border-radius: 5px;
        height: auto;
        font-size: larger;
        background-color: #221b24; 
        padding: 10px; 
        margin: 5px 10px;   
    }
    .container {
        display: grid;
        flex-direction: horizontal;
        align-items: center;
        justify-content: center;    
    }
</style>