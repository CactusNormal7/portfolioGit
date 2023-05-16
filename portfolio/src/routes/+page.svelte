<script lang="ts">
    import { each, onMount } from "svelte/internal";
    import type { PageData } from "./$types";
    
    let circle: HTMLDivElement;
    let buttonviewmore: HTMLButtonElement;
    let projectlistdiv: HTMLDivElement;
    let allcard: NodeListOf<HTMLElement>;
    let divDesc :NodeListOf<HTMLDivElement>;
    let linkButtons :NodeListOf<HTMLButtonElement>;



    export let data: PageData;
    $: ({ projects } = data);

    function mouseHandler(e: any) {
        circle.style.left = `${e.clientX - 50}px`;
        circle.style.top = `${e.clientY - 40}px`;
    }

    onMount(() => {
        allcard = projectlistdiv.querySelectorAll(".cardivall")
        divDesc = projectlistdiv.querySelectorAll("#descriptiondiv") 
        linkButtons = projectlistdiv.querySelectorAll("#linkButton") 
    });

    const viewMoreOnClick = (idclicked: number, idclick: string) => {
        if(allcard[idclicked].querySelector<HTMLButtonElement>(`#${idclick}`)?.getAttribute("data-test") === "false") {
            allcard[idclicked].querySelector<HTMLDivElement>(".cardDivTop")!.style.height = "330px";
            allcard[idclicked].querySelector<HTMLButtonElement>(`#${idclick}`)?.setAttribute("data-test", "true");
            divDesc[idclicked].style.visibility = "visible"
            linkButtons[idclicked].style.transition = "0.2s ease"
            linkButtons[idclicked].style.visibility = "visible"
        }else {
            allcard[idclicked].querySelector<HTMLDivElement>(".cardDivTop")!.style.height = "150px";
            allcard[idclicked].querySelector<HTMLButtonElement>(`#${idclick}`)?.setAttribute("data-test", "false");
            divDesc[idclicked].style.visibility = "hidden"
            linkButtons[idclicked].style.visibility = "hidden"
            linkButtons[idclicked].style.transition = "0s"
        }
    }

    
</script>

<main id="main" on:mousemove={mouseHandler}>
    <div style="color: white;" />
    <div class="containerAll">
        <div bind:this={circle} id="circle" />  
        <div id="mainTittleContainer">
            <h1 id="mainTittle">Hi, I'm Jules Besson, <br> Welcome to my portfolio</h1>
            <h3 id="subtittle">I'm a student in web developpement.</h3>
        </div>
    </div>



    <!-- about me -->
    <div>
        <div style="width: 100vw; display: flex; justify-content: center; margin-top : 100px;">
            <h1 id="aboutmesectiontittle">About me</h1>
            <div class="traithorizontal1"></div>
        </div>
        <div style="display: flex; justify-content: center;">
            <div class="traithorizontal2"></div>
        </div>

    </div>

    <!-- about me  -->

    <!-- project cards -->
    <div style="display: flex; justify-content: center; margin-top: 100px;">
        <div class="projectlistdiv" bind:this={projectlistdiv}>
            {#each projects as items, i}
            <div class="cardivall" id="cardivall{i}">
                <div class="cardDivTop">
                    <h2 style="color: white;margin: 0; margin-left: 10px; font-family: 'Poppins', sans-serif;margin-top: 50px;">{items.name}</h2>
                    <div id="descriptiondiv">{items.desc}</div>
                    <button id="linkButton"><a href="{items.repo}">open site</a></button>
                </div>
                <div  class="cardDivBot">
                    <button on:click={() => viewMoreOnClick(i, `buttonviewmore${i}`)} class="buttonviewmore" id="buttonviewmore{i}" data-test="false">view more</button>
                </div>
            </div>
            {/each}
        </div>
    <!-- project cards -->
    </div>
</main>
    
<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

    :global(body) {
        background: #0f0f0f;
        /* cursor: url(''), auto; */
        overflow-x: hidden;
    }

    .containerAll {
        padding-top: 10vh;
        display: flex;
        justify-content: center;
        width: 100vw;
    }

    .traithorizontal1 {
        width: 60vw;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        border: 2px solid;
        margin-top: 42px;
        border-color: white;
        height: 0px;
    }

    .traithorizontal2 {
        width: 71.5vw;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        border: 2px solid;
        margin-top: 42px;
        border-color: white;
        height: 0px;
    }

    #aboutmesectiontittle {
        font-family: "Poppins",sans-serif;
        color: white;
        height: 1px;
        padding: 0;
    }

    #linkButton {
        background-color: black;
        border: 3px solid;
        border-color: white;
        font-size: 20px;
        padding: 4px;
        transition: 0.3s ease;
        visibility: hidden;
        color: white;
        margin-top: 30px;
        font-weight: bolder;
    }

    #linkButton > a {
        text-decoration: none;
        color: white;
    }

    #linkButton:hover {
        box-shadow: 5px 5px white;
    }

    .buttonviewmore {
        background-color: transparent;
        border: 3px solid;
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        transition: 0.5s ease;
        font-weight: bolder;
    }

    #descriptiondiv {
        visibility: hidden;
        color: white;
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        font-weight: bolder;
        margin-top: 60px;
        max-width: 80%
    }

    .buttonviewmore:hover {
        color:white;
        background-color: black;
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

    #main {
        height: 100vh;
    }

    #mainTittle {
        font-size: 60px;
        color: white;
        margin: 0   ;
        font-family: "Poppins", sans-serif;
        padding-right: 200px;
    }

    #subtittle {
        font-size: 20px;
        color: white;
        padding-left: 50px;
        margin: 0;
        font-family: "Poppins", sans-serif;
        padding-right: 200px;
    }

    #ProjectTittle {
        margin-left: 30px;
        color: white;
        font-family: "Poppins", sans-serif;
    }

    .cardDivBot {
        width: 300px;
        height: 100px;
        margin-left: 20px;
        transition: 0.6s ease;
        margin-right: 20px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cardDivTop {
        width: 292px;
        height: 150px;
        margin-left:20px;
        transition: 0.6s ease;
        margin-right: 20px;
        margin-top: 30px;
        flex-direction: column;
        align-items: center;
        border: 4px solid;
        display: flex;
        border-color: white;
    }

    .containerAll {
        display: flex;
    }

    .cardivall:hover > :nth-child(1) {
        box-shadow: 10px 10px rgb(180, 180, 180);
    }

    .cardivall:hover > :nth-child(2) {
        box-shadow: 10px 10px rgb(180, 180, 180);
    }

    .projectlistdiv{
        justify-content: center;
        display: flex;
        max-width: 70vw;
        flex-wrap: wrap;
    }
</style>
