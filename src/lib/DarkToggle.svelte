<script lang="ts">

    let { on = $bindable(false) } = $props();

</script>

<button class="after:content-['🌙'] before:content-['☀️'] absolute left-0 top-0 m-10 {on ? 'before:visible after:hidden' : 'before:hidden after:visible'} text-2xl" onclick={() => on = !on}>

</button>

<style lang="postcss">
</style>