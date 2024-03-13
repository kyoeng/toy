<script lang="ts">
    import { Modal, getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
    import "./ContentsView.scss";
    import { onMount } from "svelte";
    import { jsWebData } from "../../../routes/js-web/data";
    import { contentsViewStore, showMoreBtnStore } from "$stores/contentsViewStore";
    import { screenModeStore, viewListNum } from "$stores/commonStore";

    // 컨텐츠 타입 (외부에서 넘겨줌)
    export let contentsType: string;

    // 컨텐츠 데이터 (위의 컨텐츠 타입에 따라 결정됨)
    let contentsData: contentsDataType[];

    // 컨텐츠 버튼(html)을 생성하기 위한 컨텐츠 데이터 배열 (표시할 데이터만큼만 저장)
    const viewList: contentsDataType[] = [];

    // 컨텐츠 데이터에서 가져올 데이터 index를 위한 변수
    let idx: number;

    // ModalStore 가져오기
    const modalStore = getModalStore();


    /**
     * Modal open을 위한 함수 (contents-box의 클릭 이벤트)
     * @param component 해당 Modal 키
     */
    function openModalEvt (component: string) {
        const modal: ModalSettings = {
            type: "component",
            component,
        }
        modalStore.trigger(modal);
    }
    


    /**
     * store 업데이트 함수 (view(html)에 store 연동 해둠 (contentsViewStore, showMoreBtnStore))
     * @param startIdx  시작 index
     * @param dataArr   컨텐츠 데이터
     */
    function updateView(startIdx: number, dataArr: contentsDataType[]) {
        const limitIdx = (startIdx + viewListNum)

        for (let i = startIdx; i < limitIdx; i++) {
            if (!dataArr[i]) break;
            viewList.push(dataArr[i])
        }

        contentsViewStore.update(viewList);
        
        if (!dataArr[limitIdx]) showMoreBtnStore.update(false);
        else showMoreBtnStore.update(true);

        idx = limitIdx;
    }



    // onMount 함수
    onMount(() => {
        idx = 0;

        switch (contentsType) {
            case "jsWeb":
                contentsData = jsWebData;
                break;
        
            default:
                break;
        }

        updateView(idx, contentsData);
    });
</script>




<h3 id="list-title">- Contents List -</h3>


<div id="list-container">
    {#each $contentsViewStore as el}
        <button class="contents-box" on:click={() => openModalEvt(el.component)}>
            <img src={el.img} alt="">
            <div class="info">{el.info}</div>
        </button>
    {/each}
</div>


{#if $showMoreBtnStore}
    <div id="btn-container">
        <button id="show-more-btn" type="button" class="btn bg-surface-100-800-token" on:click={() => updateView(idx, contentsData)}>
            SHOW MORE
        </button>
    </div>
{/if}