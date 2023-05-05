<script lang="ts">
    import { each } from "svelte/internal";
import type { PageData } from "../$types";
    export let data : PageData
    $: ({projects} = data)
</script>

<div>
    {#each projects as project}
        <h1>{project.name}</h1>
    {/each}

    <form action="?/createProject" method="POST">
        <input type="text" name="name" id="name" placeholder="name">
        <input type="text" name="desc" id="desc" placeholder="description">
        <input type="text" name="repo" id="repo" placeholder="repository link">
        <input type="text" name="image" id="image" placeholder="image src">
        <button type="submit">add</button>
    </form>
</div>