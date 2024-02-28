<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.postcss';
    import Header from './Header.svelte';
	import { initializeStores } from "@skeletonlabs/skeleton";

	
	initializeStores();
</script>



<Header />

<div id="container">
	<slot />
</div>
