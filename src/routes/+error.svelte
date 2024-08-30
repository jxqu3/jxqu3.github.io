<script>
	import { page } from '$app/stores';
</script>

<div class="content">
    <h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
    <img src="/logo-nobg.svg" alt="JXQU3 Logo"/>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;

        background-color: black;
        color: white;
        font-size: 2rem;
	}
    img {
        width: 50%;
        position: absolute;
        opacity: 0.1;
        z-index: 0;
    }
	h1 {
        z-index: 1;
		color: red;
		font-size: 3em;
	}
    p {
        z-index: 1;
    }
</style>
