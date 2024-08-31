<script lang="ts">
	import '../app.css';
	import { getContext, onMount, setContext } from 'svelte';
	import LinkIcon from '$lib/LinkIcon.svelte';
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';

	let { children } = $props();
</script>

<main class="w-screen h-screen overflow-hidden flex items-center justify-center wallpaper">
	<div class="window absolute bg-white flex flex-col shadow-lg rounded-lg overflow-hidden z-50 resize">
		<div class="window-title w-full flex h-10 bg-neutral-900">
			<span class="text-white mr-auto ml-5">{""}</span>
			<a href="/" class="font-mono window-icon">
				<Icon icon="minimize"></Icon>
			</a>
			<a href="/" class="font-mono window-icon">
				<Icon icon="exit"></Icon>
			</a>
		</div>
		{@render children()}
	</div>
	<div class="flex flex-row h-20 absolute bottom-0 w-screen justify-center items-center taskbar z-1">
		<div class="flex flex-row gap-4">
			<LinkIcon icon="home" href="/"></LinkIcon>
			<LinkIcon icon="terminal" href="/terminal"></LinkIcon>
			<LinkIcon icon="yt" href="https://www.youtube.com/@JXQU3" target="_blank"></LinkIcon>
			<LinkIcon icon="spotify" href="https://open.spotify.com/artist/2pdUGHioFEsL9VTCCaYt03" target="_blank"></LinkIcon>
			<LinkIcon icon="github" href="https://github.com/jxqu3" target="_blank"></LinkIcon>
		</div>
	</div>

	<div class="w-screen h-screen fixed z-0">
		<a href="/projects" class="folder">
			<Icon icon="folder" class="folder"></Icon>
			<span class="text-sm">Projects</span>
		</a>
	</div>
</main>
<style lang="postcss">
	.wallpaper {
		background-image: url('/wallpaper.svg');
		background-size: cover;
	}

	.window {
		width: 50%;
		height: 50%;
		position: relative;
	}

	:global(.window-icon img) {
		width: 2rem !important;
		height: 1rem !important;
	}

	:global(.window-icon) {
		@apply text-white text-3xl w-14 h-10  hover:bg-neutral-700 flex items-center justify-center;
	}

	.folder {
		@apply text-3xl w-24 p-2 m-4 h-28 flex items-center justify-center flex-col;
		filter: drop-shadow(0 2px .05rem #4046);
	}

	.folder span {
		color: #fff;
		filter: drop-shadow(0 2px .05rem #4046);
	}

	.folder:hover {
		@apply rounded-md;
		background-color: #db263c22;
		border: #db263c44 solid 1px;
	}

	.window-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
	}
</style>