<script>
    export let place;
    export let name;
</script>

<div class="ranking">
<div class="ranking_place">
    <p class = "blue_neon_text">{place}</p>
</div>

<div class="ranking_name">
    <p class = "blue_neon_text">{name}</p>
</div>
</div>
<style>
.ranking {
    display: flex;
    width: 80vw;
    border-radius: 4px;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;
    font-family: monospace;
    font-size: 30px;
}

.ranking_place{
    font-size: 25px;
    flex: center;
    text-align: center;
    background: #56018c;
    padding: 20px;
    margin-left: 20vw;
    width: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    text-align: justify;
    box-shadow: 0px 0px 50px #eb21b6;
}

.ranking_name{
    font-size: 20px;
    flex: center;
    background: #56018c;
    margin: 10px;
    padding: 20px;
    width: 60vw;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0px 0px 50px #eb21b6;
}
</style>