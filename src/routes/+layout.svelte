<script lang="ts">
	import '../app.postcss';
	import Header from "../components/header/Header.svelte";
	import { initializeStores } from "@skeletonlabs/skeleton";
	
	initializeStores();
</script>



<Header />

<div id="container">
	<slot />
</div>
