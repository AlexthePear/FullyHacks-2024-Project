<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte';

    let slug;
    $: slug = $page.params.slug
    
    let api_url = `https://api.animethemes.moe/anime/${slug}?include=animethemes.animethemeentries`;

    $: api_url = `https://api.animethemes.moe/anime/${slug}?include=animethemes.animethemeentries`

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
    <h1>{data.anime.name}</h1>
    <p>{@html data.anime.synopsis}</p>
    <h2>Themes</h2>
    <!-- {#each data.anime.themes as theme}
        <h3>{theme.type}</h3>
        <h4>{theme.entries[0].title}</h4>
        <audio controls>
            <source src={theme.entries[0].mirror.mirror_url} type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    {/each} -->
{/if }