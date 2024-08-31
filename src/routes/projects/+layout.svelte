<script>

	import Icon from "$lib/Icon.svelte";

    import {page} from '$app/stores';

</script>
<div class="explorer">
    <div class="header h-12 p-2 bg-white w-full">
        <span class="h-full flex items-center">/home/user/Projects/{$page.params.project ?? ""}</span>
    </div>
    <div class="body">
        <li class="folders">
            <ul><a href="/projects" class="flex flex-row items-center p-2 gap-2 w-full"><Icon icon="folder" class="list-folder"/>Projects</a></ul>
        </li>
        <div class="files flex flex-wrap">
            <slot />
        </div>
    </div>
</div>

<style lang="postcss">
    li {
        @apply list-none;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        cursor: pointer;
    }

    ul:hover {
        @apply bg-neutral-100;
    }

    :global(.list-folder) {
        width: 1rem;
        height: 1rem;
    }

    .explorer {
        @apply flex flex-col;
        width: 100%;
        height: 100%;
    }
    
    .folders {
        border-right: 1px solid #ccc;
    }

    .header {
        border-bottom: 1px solid #ccc;
    }

    .body {
        @apply flex flex-col;
        height: 100%;
        width: 100%;

        display: grid;
        grid-template-columns: 1fr 5fr;
    }

    :global(.file) {
        @apply flex items-center w-32 h-36 flex-col p-2 m-1 transition-all text-center;
    }

    :global(.file svg, .file img) {
        @apply w-20 h-20;
    }

    :global(.file .name) {
        font-size: 0.9rem;
    }

    :global(.file:hover) {
        @apply bg-neutral-100 rounded-md;
        border: #ccc 1px solid;
        cursor: pointer;
    }
</style>