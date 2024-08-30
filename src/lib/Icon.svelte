<script lang="ts">
	import { onMount } from "svelte";

    let { icon, class: classes = "" } = $props();

    let svg = $state("");

    onMount(async () => {
        svg = await fetch(`/icons/${icon}.svg`).then(r => r.text());
    })
</script>

<div class="icon-svg flex items-center justify-center {classes}">
    {@html svg}
</div>

<style lang="postcss">
    :global(.icon-svg svg) {
        z-index: 2;
        width: 100%;
        height: 100%;
    }
</style>