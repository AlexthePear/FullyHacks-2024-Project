<script>
    import { onMount } from "svelte";
    let data = { anime: [] }; // Initialize data with an empty anime array
  
    const getPosts = async () => {
      const res = await fetch('https://api.animethemes.moe/anime');
      const newData = await res.json();
      data = newData; // Update data with a reactive statement
      console.log(data);
    }
  
    onMount(() => {
      getPosts();
    });
  </script>
  
  {#each data.anime as anime}
    <div>
      <h1>{anime.name}</h1>
      <img src={anime.cover_image} alt={anime.title} />
    </div>
  {/each}