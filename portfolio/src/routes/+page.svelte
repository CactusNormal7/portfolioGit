<script lang="ts">
    let circle: HTMLDivElement
    

    function mouseHandler(e: any) {
        circle.style.left = `${e.clientX - 50}px`
        circle.style.top = `${e.clientY - 40}px`
    }
    

</script>

<main on:mousemove={mouseHandler}>
    <div class="containerAll" >
        <div id="mainTittleContainer">
            <h1 id="mainTittle">Jules Besson, developeur web.</h1>
        </div>
        <div bind:this={circle} id="circle" /> 
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

    :global(body) {
        background: #0f0f0f;
        cursor: url('/static/favicon.png'), auto;
        overflow: hidden;
    }

    .containerAll {
        display: flex;
        justify-content: center;
        width: 100vw;
        margin-top: 10vh;
        height: 100vh;
    }
    #circle {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid;
        display: block;
        background-color: white;
        mix-blend-mode: difference;
        pointer-events: none;
    }

    #mainTittle {
        font-size: 60px;
        color: white;
        font-family: "Poppins", sans-serif;
    }
</style>
