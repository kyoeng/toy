<script lang="ts">
	import '../app.postcss';
    import Header from './Header.svelte';
	import { onMount } from "svelte";
    import { autoModeWatcher } from "@skeletonlabs/skeleton";

	onMount(() => {
        autoModeWatcher();
    });
</script>



<Header />

<div id="container">
	<slot />
</div>
