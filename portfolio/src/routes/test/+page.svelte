<script lang="ts">
    import { onMount } from 'svelte';
    import { each } from "svelte/internal";
   import type { PageData } from "../$types";
    export let data : PageData

    $: ({projects} = data)
    let currentImageIndex = 0;
  
    // onMount(() => {
    //   const interval = setInterval(() => {
    //     currentImageIndex = (currentImageIndex + 1) % projects.length;
    //   }, 3000);
  
    //   return () => {
    //     clearInterval(interval);
    //   };
    // });
    
  </script>
  
  <style>
    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      overflow: hidden;
    }
  
    .carousel img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
  
    .carousel img:not(:first-child) {
      transform: translateX(-100%);
    }
  </style>
  
  <div class="carousel">
    {#each projects as item, i}
    <div style="transform: translateX({(i- currentImageIndex) *100}%)">{item.name}</div>
      <!-- <img src={image} alt="Image {i + 1}" style="transform: translateX({(i - currentImageIndex) * 100}%)" /> -->
    {/each}
  </div>