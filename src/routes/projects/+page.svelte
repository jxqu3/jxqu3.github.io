<script>
	import Icon from "$lib/Icon.svelte";

    import {projects} from "$lib/projects";
</script>

{#each projects as project}
<a class="file" href="/projects/{project.name}">
    <Icon icon="project-folder"/>
    <span class="name">{project.name}</span>
</a>
{/each}

<style lang="postcss">

</style>