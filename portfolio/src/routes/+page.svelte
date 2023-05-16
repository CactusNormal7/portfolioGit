<script lang="ts">
    import { each, onMount } from "svelte/internal";
    import type { PageData } from "./$types";
    
    let circle: HTMLDivElement;
    let buttonviewmore: HTMLButtonElement;
    let projectlistdiv: HTMLDivElement;
    let allcard: NodeListOf<HTMLElement>;

    export let data: PageData;
    $: ({ projects } = data);

    function mouseHandler(e: any) {
        circle.style.left = `${e.clientX - 50}px`;
        circle.style.top = `${e.clientY - 40}px`;
    }

    onMount(() => {
        allcard = projectlistdiv.querySelectorAll(".cardivall")
    });

    const viewMoreOnClick = (idclicked: number, idclick: string) => {
        if(allcard[idclicked].querySelector<HTMLButtonElement>(`#${idclick}`)?.getAttribute("data-test") === "false") {
            allcard[idclicked].querySelector<HTMLDivElement>(".cardDivTop")!.style.height = "300px";
            allcard[idclicked].querySelector<HTMLButtonElement>(`#${idclick}`)?.setAttribute("data-test", "true");
            let divDesc = document.createElement("div")
            divDesc.innerText = projects[idclicked].desc
            divDesc.style.color = "white";
            divDesc.style.fontSize = "14px";
            divDesc.style.fontFamily = "'Poppins', sans-serif";
            divDesc.style.fontWeight = "bolder"
            divDesc.style.marginTop = "60px"
            divDesc.style.maxWidth = "80%"
            divDesc.classList.add("descriptionTxt")
            
            allcard[idclicked].querySelector<HTMLDivElement>(".cardDivTop")?.appendChild(divDesc);
        }else {
            allcard[idclicked].querySelector<HTMLDivElement>(".cardDivTop")!.style.height = "150px";
            allcard[idclicked].querySelector<HTMLButtonElement>(`#${idclick}`)?.setAttribute("data-test", "false");
            let ratio = allcard[idclicked].querySelector<HTMLDivElement>(".descriptionTxt")
            ratio?.remove();
            
        }
    }

    
</script>

<main id="main" on:mousemove={mouseHandler}>
    <div style="color: white;" />
    <div class="containerAll">
        <div bind:this={circle} id="circle" />  
        <div id="mainTittleContainer">
            <h1 id="mainTittle">Hi, I'm Jules Besson, <br> Welcome to my portfolio</h1>
        </div>
    </div>
    <div style="display: flex; justify-content: center">
        <div class="projectlistdiv" bind:this={projectlistdiv}>
            {#each projects as items, i}
            <div class="cardivall" id="cardivall{i}">
                <div class="cardDivTop">
                    <h2 style="color: white;margin: 0; margin-left: 10px; font-family: 'Poppins', sans-serif;margin-top: 50px;">{items.name}</h2>
                </div>
                <div  class="cardDivBot">
                    <button on:click={() => viewMoreOnClick(i, `buttonviewmore${i}`)} class="buttonviewmore" id="buttonviewmore{i}" data-test="false">view more</button>
                </div>
            </div>
            {/each}
        </div>
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

    .buttonviewmore {
        background-color: transparent;
        border: 3px solid;
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        transition: 0.5s ease;
        font-weight: bolder;
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

    .projectlistdiv{
        justify-content: center;
        display: flex;
        max-width: 70vw;
        flex-wrap: wrap;
    }
</style>
