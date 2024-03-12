<script lang="ts">
	import '../app.postcss';
    import Footer from '$components/footer/Footer.svelte';
	import Header from "$components/header/Header.svelte";
	import AutomaticDriveCar from "$components/modal/automaticDriveCar/AutomaticDriveCar.svelte";
    import { Modal, type ModalComponent } from "@skeletonlabs/skeleton";
	import { initializeStores } from "@skeletonlabs/skeleton";
    import { jsWebData } from './js-web/data';
	
	
	initializeStores();


	// Modal 저장소 배열
	const modalRegistry: Record<string, ModalComponent> = {
        "automaticCar": {ref: AutomaticDriveCar, props: jsWebData[0]}
    }
</script>



<Header />
<div id="container">
	<slot />
</div>
<Footer />


<Modal components={modalRegistry} />