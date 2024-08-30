<script lang="ts">
	import Icon from "$lib/Icon.svelte";
    import { page } from '$app/stores';
    import { projects } from '$lib/projects';
    import { blur } from 'svelte/transition';
    const projectName = $page.params.project
    const project = projects.find(project => project.name === projectName)

    let open = $state(false)
    let imgOpen = $state(false)
</script>

{#if open && project}
<div class="modal window absolute bg-white flex flex-col shadow-lg rounded-lg overflow-hidden z-50 ml-52 resize">
    <div class="window-title w-full flex h-10 bg-neutral-900">
        <span class="text-white mr-auto ml-5">{""}</span>
        <button onclick={() => open = false} class="font-mono window-icon">
            <Icon icon="exit"></Icon>
        </button>
    </div>
    <div class="body w-52 h-52 p-2">
        <p>{project.description}</p>
    </div>
</div>
{/if}

{#if imgOpen && project}
<div class="modal window absolute bg-white flex flex-col shadow-lg rounded-lg overflow-hidden z-50 ml-52 resize">
    <div class="window-title w-full flex h-10 bg-neutral-900">
        <span class="text-white mr-auto ml-5">{""}</span>
        <button onclick={() => imgOpen = false} class="font-mono window-icon">
            <Icon icon="exit"></Icon>
        </button>
    </div>
    <div class="body w-64 h-64">
        <img src="/projects/{project.image}" class="w-full h-full" alt="AIUI Logo">
    </div>
</div>
{/if}

{#if project}
<a class="file" href="{project.github}">
    <Icon icon="shortcut"/>
    <span class="name">{project.name} GitHub</span>
</a>
<button class="file" onclick={() => open = true}>
    <Icon icon="file"/>
    <span class="name">About.txt</span>
</button>
{#if project.image}
<button class="file" onclick={() => imgOpen = true}>
    <img src="/projects/{project.image}" alt="AIUI Logo">
    <span class="name">{project.name}.png</span>
</button>
{/if}
{/if}