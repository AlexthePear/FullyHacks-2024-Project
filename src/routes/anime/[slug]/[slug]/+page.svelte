<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import { db } from '../../../../lib/firebase/firebase.client.js'; 
    import { doc, setDoc } from "firebase/firestore";   
    import { authStore } from '../../../../lib/stores/authStore.js';    

    let slug;
    $: slug = $page.params.slug

    let api_url = `https://api.animethemes.moe/animetheme/${slug}?include=animethemeentries.videos,anime,song`;

    $: api_url = `https://api.animethemes.moe/animetheme/${slug}?include=animethemeentries.videos,anime,song`

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
        console.log(api_url)
    }
       console.log(data);
    }
    onMount( () => {
        run();
        
    })
    let rating;
    function handleSumbit() {
        rateTheme(slug, rating);
    }

    async function rateTheme(op_id, value) {
        if ($authStore.currentUser) {
            let docRef = doc(db, "Users", $authStore.currentUser.uid);
            await setDoc(docRef, {
                [op_id]: value
            }, { merge: true });    
        }

    }

</script>

{#if data == null}
    <h1>Loading...</h1>
{:else}
    <h1 class="pink_neon_text">{data.animetheme.anime.name}</h1>
    <h2 class="blue_neon_text">{data.animetheme.slug} {data.animetheme.song.title}</h2>
    <h2>Entries</h2>
    {#each data.animetheme.animethemeentries as entry}
    <div class="entry-container">
        <h3>Version {entry.version}</h3>
        <episodes>Episodes: {entry.episodes}</episodes>
        <iframe src={entry.videos[0].link} frameborder="0" title={data.animetheme.song.title} allowfullscreen></iframe>
    </div>
    {/each}

    <h2> Rate this theme</h2>
    <form on:submit|preventDefault={handleSumbit}>
        <input type="number" bind:value={rating} min="1" max="10" step="1" />
        <input type="submit" value="Submit" /> 
    </form>

    <h2>
        Rating :    
    </h2>
{/if }

<style>
    h3, episodes {
        color: white;
        margin-right: 5px;
        margin-bottom: 10px;
    }
    .entry-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    iframe {
        box-shadow: 0px 0px 30px 4px #eb21b6;
        width: 60%;
        height: 300px;
    }
    episodes {
        margin-right: 5px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 30%;
    }
</style>
