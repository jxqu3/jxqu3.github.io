<script lang="ts">
	import { onMount } from "svelte";

    let { icon, href: href = "", target = "" } = $props();

    let svg = $state("");

    onMount(async () => {
        svg = await fetch(`/icons/${icon}.svg`).then(r => r.text());
    })
</script>

<a href={href} target={target} class="btn">
    {@html svg}
</a>

<style lang="postcss">
    .btn {
        @apply flex;
        width: 4rem;
        height: 4rem;
        z-index: 2;
        transition: all 0.1s ease-in-out;
    }

    :global(.btn svg) {
        z-index: 2;
        width: 100%;
        height: 100%;
        @apply drop-shadow-md
    }

    .btn:hover {
        @apply scale-125 rounded-lg;
    }
</style>