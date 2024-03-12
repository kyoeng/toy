<script lang="ts">
    import { Modal, getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
    import "./ContentsView.scss";
    import { onMount } from "svelte";
    import { jsWebData } from "../../../routes/js-web/data";

    // 컨텐츠 타입 (외부에서 넘겨줌)
    export let contentsType: string;
    // 컨텐츠 데이터 (위의 컨텐츠 타입에 따라 결정됨)
    let contentsData;


    // Modal을 위한 store 가져오기
    const modalStore = getModalStore();


    
    function test() {
        const modal: ModalSettings = {
            type: "component",
            component: "automaticCar",
        }
        modalStore.trigger(modal);
    }



    // onMount 함수
    onMount(() => {
        contentsData = contentsType === "jsWeb" ? jsWebData : contentsType === "jsDesktop" ? "" : "";
        // todo 컨텐츠 data의 0 ~ 6까지 데이터 불러와서 리스트 만들기
    });
</script>




<h3 id="list-title">- Contents List -</h3>


<div id="list-container">
    <button class="contents-box" on:click={test}>
        <div class="test"></div>
    </button>

    <div class="contents-box">
        <div class="test"></div>
    </div>

    <div class="contents-box">
        <div class="test"></div>
    </div>

    <div class="contents-box">
        <div class="test"></div>
    </div>

    <div class="contents-box">
        <div class="test"></div>
    </div>
</div>


<div id="btn-container">
    <button id="show-more-btn" type="button" class="btn bg-surface-100-800-token">
        SHOW MORE
    </button>
</div>