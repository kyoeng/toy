<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import "./ModalContainer.scss";



    // 컨텐츠의 제목 (외부에서 받음)
    export let title: string;
    export let parent: SvelteComponent;
</script>





<div class="bg-surface-100-800-token" id="modal-container">
    <h3 id="modal-title">{title}</h3>

    <div id="view-box">
        <slot />
    </div>

    <button class="btn variant-filled" id="modal-close-btn" on:click={parent.onClose}>Close</button>
</div>