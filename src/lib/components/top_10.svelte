<script>
    import Ranking from "./themes.svelte";
    export let data = ["","",""];
</script>

<div class=themes>
    <div class="theme_1">
        <div class="theme_content_1">
            <h1>theme one</h1>
        </div>
    </div>
    
    <div class="theme_2">
        <div class="theme_content_2"></div>
    </div>

    <div class="theme_3">
        <div class="theme_content_3"></div>
    </div>  
</div>

<style>

.themes{
    display: flex;
    flex-direction: column;
}


</style>