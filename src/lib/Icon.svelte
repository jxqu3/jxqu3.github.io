<script lang="ts">
	import { onMount } from "svelte";

    let { icon, class: classes = "" } = $props();

</script>

<div class="icon-svg flex items-center justify-center {classes}">
    <img src="/icons/{icon}.svg" alt="">
</div>

<style lang="postcss">
    :global(.icon-svg img) {
        z-index: 2;
        width: 100%;
        height: 100%;
    }
</style>