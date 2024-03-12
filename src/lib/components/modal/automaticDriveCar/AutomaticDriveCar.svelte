<script lang="ts">
    import ModalContainer from "../ModalContainer.svelte";
    import { getModalStore } from "@skeletonlabs/skeleton";
    import type { SvelteComponent } from "svelte";
    import "./AutomaticDriveCar.scss";
    

    // 컨텐츠의 제목 (외부에서 받음)
    export let title: string;
    export let parent: SvelteComponent;


    // Modal을 위한 store 가져오기
    const modalStore = getModalStore();
</script>



{#if $modalStore[0]}
    <ModalContainer parent={parent} title={title}>

    </ModalContainer>
{/if}