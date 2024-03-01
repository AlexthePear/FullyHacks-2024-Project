
<script>
    export let anime;
    let anime_slug = anime.slug;
</script>


<div class="title-container">
    <a href="/anime/{anime_slug}">{anime.name }</a>
</div>

<style>
    .title-container {  
        width: 80%;
        height: 60px;
        border-radius: 5px;
        height: auto;
        font-size: larger;
        background-color: #221b24; 
        padding: 10px; 
        margin: 5px 10px;   
    }
    a {
        width:100%;
        font-size: 35px;
        color: white;
        text-shadow: 0 0 10px teal, 
        0 0 20px teal, 
        0 0 30px teal,;
    }
</style>