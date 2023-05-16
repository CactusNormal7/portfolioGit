
<script lang="ts">
    import { each, onMount } from "svelte/internal";
    import type { PageData } from "./$types";
    import discordimg from "$lib/discord.svg"
    import linkedinlogo from "$lib/linkedin.svg"
    import githublogo from "$lib/github.svg"
    import twitterlogo from "$lib/twitter.svg"
    // import emailjs from "@emailjs/browser/"
    
    let circle: HTMLDivElement;
    let buttonviewmore: HTMLButtonElement;
    let projectlistdiv: HTMLDivElement;
    let allcard: NodeListOf<HTMLElement>;
    let divDesc :NodeListOf<HTMLDivElement>;
    let linkButtons :NodeListOf<HTMLButtonElement>;
    let discordlogo: HTMLImageElement;
    let main:HTMLElement;

    // function sendEmail(e:any) {
    //     emailjs.sendForm("service_7yknyyb","template_ln2xu7q",e.target, "tEQQNmweD6fz6uf3s")
    //     .then((result) => {
    //         console.log("succes", result.text);
    //     }, (error) => {
    //         console.log("failed", error.text);
    //     });
    // }

    export let data: PageData;
    $: ({ projects } = data);

    function mouseHandler(e: any) {
        circle.style.left = `${e.clientX - 50}px`;
        circle.style.top = `${e.clientY - 40 + window.scrollY}px`;
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


<main id="main" bind:this={main} on:mousemove={mouseHandler}>
    <div style="color: white;" />
    <div class="circletittle"></div>
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
        <div style="width:100vw; display: flex; justify-content:center; margin-top:50px;">
            <div style="display: flex; justify-content:center;">
                <div class="socialmediadivlogo" style="display: flex; flex-direction: column; justify-content:center; align-items:center">
                    <img id="discordlogo" src="{discordimg}" alt="" style="max-width:60px">
                    <h4 id="discordname" class="socialmedia">CactusNormal</h4>
                </div>
                <div class="socialmediadivlogo" style="display: flex; flex-direction: column; justify-content:center; align-items:center">
                    <img id="discordlogo" src="{linkedinlogo}" alt="" style="max-width:60px">
                    <h4 id="discordname" class="socialmedia">CactusNormal</h4>
                </div>
                <div class="socialmediadivlogo" style="display: flex; flex-direction: column; justify-content:center; align-items:center">
                    <img id="discordlogo" src="{githublogo}" alt="" style="max-width:60px">
                    <h4 id="discordname" class="socialmedia">CactusNormal</h4>
                </div>
                <div class="socialmediadivlogo" style="display: flex; flex-direction: column; justify-content:center; align-items:center">
                    <img id="discordlogo" src="{twitterlogo}" alt="" style="max-width:60px">
                    <h4 id="discordname" class="socialmedia">CactusNormal</h4>
                </div>
            </div>
            <div style="height: 180px;width:0px; border:2px solid;border-color:white;"></div>
            <div id="skillsdiv">
                <div style="width: 100%; display:flex;justify-content:center;">
                    <h2 class="skillstittle">Skills</h2>
                </div>
                <div id="skillsdivtext">
                    <h3 style="grid-column: 1; grid-row: 1;" class="skilltxt">html</h3>
                    <h3 style="grid-column: 2; grid-row: 2;" class="skilltxt">css</h3>
                    <h3 style="grid-column: 2; grid-row: 1;" class="skilltxt">typescript</h3>
                    <h3 style="grid-column: 1; grid-row: 2;" class="skilltxt">golang</h3>
                </div>
            </div>
        </div>

        <div style="width: 100vw; display: flex; justify-content: center; ">
            <h1 id="aboutmesectiontittle">Projects</h1>
            <div class="traithorizontal1"></div>
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

    <!-- Contact -->
    <div style="width: 100vw; display: flex; justify-content: center; padding-top: 80px">
        <h1 id="aboutmesectiontittle">Contact</h1>
        <div class="traithorizontal1"></div>
    </div>

    <div style="width: 100vw; height : 80vh; display:flex; justify-content:center; ">
        <div id="contactdivcontainer">
            <form style="width: 100%; height: 80%;">
                <div style="display:flex; justify-content:center; height: 20%; gap:10%" >
                    <input name="from_name" placeholder="name" class="halfinputcontact" type="text">
                    <input name="email" placeholder="email" class="halfinputcontact" type="text">
                </div>
                <div style="display:flex; justify-content:center;">
                    <input name="object" placeholder="object" class="inputcontact" type="text">
                </div>
                <div style="display:flex; justify-content:center;">
                    <textarea name="content" id="contentarea" cols="80" rows="10" placeholder="content"></textarea>
                </div>
                <div style="display: flex;">
                    <button id="submitemailbutton" type="submit">SEND</button>
                </div>
            </form>
        </div>
    </div>
    <!-- Contact -->

</main>
    
<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

    :global(body) {
        background: #0f0f0f;
        /* cursor: url(''), auto; */
        overflow-x: hidden;
    }


    .skillstittle {
        font-family: "Poppins", sans-serif;
        color: white;
    }
    .skilltxt {
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        color: white;
    }

    #submitemailbutton{
        background-color: black;
        border: 3px solid;
        border-color: white;
        font-size: 20px;
        padding: 4px;
        transition: 0.3s ease;
        color: white;
        margin-left: 18.5%;
        margin-top: 30px;
        font-weight: bolder;
    }

    #submitemailbutton:hover {
        background-color: white;
        border-color: black;
        color: black;
    }

    #contentarea {
        background-color: transparent;
        color: white;
        font-family: "Poppins",sans-serif;
        transition: 0.3s ease;
        border: 3px solid;
        font-weight: bolder;
        border-color: white;
        width:62%;
    }

    #contentarea:hover {
        box-shadow: 10px 10px rgb(180, 180, 180);
    }

    .inputcontact {
        background-color: transparent;
        font-weight: bolder;
        font-family: "Poppins",sans-serif;
        width: 60.5%;
        margin-bottom: 3%;
        transition: 0.3s ease;
        color: white;
        border: 3px solid;
        border-color: white;
        height: 45%;
        padding: 1%;
    }

    #contentarea:focus {
        background-color: white;
        box-shadow: 10px 10px rgb(37, 37, 37);
        color: black;
    }

    .halfinputcontact {
        background-color: transparent;
        font-weight: bolder;
        font-family: "Poppins",sans-serif;
        width: 25%;
        transition: 0.3s ease;
        color: white;
        border: 3px solid;
        border-color: white;
        height: 45%;
        padding: 0.5%;
    }


    .halfinputcontact:hover {
        box-shadow: 10px 10px rgb(180, 180, 180);
    }

    .inputcontact:hover {
        box-shadow: 10px 10px rgb(180, 180, 180);
    }

    .halfinputcontact:focus {
        background-color: white;
        box-shadow: 10px 10px rgb(37, 37, 37);
        color: black;
    }
    .inputcontact:focus {
        background-color: white;
        box-shadow: 10px 10px rgb(37, 37, 37);
        color: black;
    }

    #skillsdivtext {
        margin: 0;
        column-gap: 40px;
        max-width: 80%;
        padding: 0;
        display: grid;
    }

    ::placeholder {
        color: white;
        padding-left: 2%;
        font-family: "Poppins",sans-serif;
    }

    input { outline: none; }
    textarea { outline: none; }

    #contactdivcontainer {
        width: 70%;
        justify-content: center;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 3px solid;
        border-color: white;
        margin-top:3vh;
    }

    #skillsdiv {
        margin-top: 10px;
        align-items:center;
        flex-direction: column;
        display: flex;
        margin-left: 60px;
        width: 20%;
        height: 160px;
        border: 3px solid;
        border-color: white;
    }

    .socialmediadivlogo {
        margin-left: 30px;
        margin-right: 30px;
    }

    .socialmedia {
        visibility: hidden;
        font-family: "Poppins", sans-serif;
        color: white;
        transition: 2s;
        padding: 0;
        margin: 0;
    }

    #discordlogo:hover + #discordname {
       visibility: visible;
    }

    #discordname:hover {
        visibility: visible;
    }

    .containerAll {
        padding-top: 10vh;
        display: flex;
        justify-content: center;
        width: 100vw;
    }

    .circletittle {
        width: 400px;
        height: 400px;
        border-radius: 500px;
        position: absolute;
        background-color: white;
        left: 48vw;
        mix-blend-mode: difference;
        top: 40px;
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
        transition: 0.6s ease-out;
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
