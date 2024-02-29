<!-- ########## script ########## -->
<script lang="ts">
    import "./Header.scss";
    import { LightSwitch, getModeOsPrefers, setModeCurrent, getDrawerStore, Drawer, type DrawerSettings } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
    import { categoryData } from "$lib/data/data";



    let menuImageMode: boolean;     // 화면 모드에 대한 변수

    // 메뉴 클릭 시 나타낼 서랍장 옵션
    const drawerStore = getDrawerStore();
    const drawerSetting: DrawerSettings = { position: "top" }

    // 카테고리 컨텐츠들에 대한 참조 변수
    const contentsArr: HTMLDivElement[] = [];



    // 화면모드(라이트, 다크) 스위치 클릭 이벤트
    function switchClickEvt(): void {
        const bfMode = localStorage.getItem("screenMode");
        const afMode = bfMode === "light" ? "dark" : "light";

        localStorage.setItem("screenMode", afMode);
        menuImageMode = !menuImageMode;
    }

    // 메뉴버튼 클릭 이벤트
    function menuClickEvt(): void {
        drawerStore.open(drawerSetting);
    }

    // 메뉴 닫기버튼 클릭 이벤트
    function menuCloseBtnClickEvt(): void {
        drawerStore.close();
    }



    onMount(() => {
        const mode = localStorage.getItem("screenMode");

        if (mode !== null) {
            const isLight = mode === "light" ? true : false;
            setModeCurrent(isLight);
            menuImageMode = isLight;
        } else {
            const osMode = getModeOsPrefers();
            const value = osMode ? "light" : "dark";
            localStorage.setItem("screenMode", value);
            setModeCurrent(osMode);
            menuImageMode = osMode;
        }
    });
</script>



<!-- ########## html ########## -->
<header id="head-container" class="bg-surface-100-800-token">
    <div id="limit-box">
        <h1 id="logo-box">
            <a href="/">Dev_NOTE º</a>
        </h1>
    
        <div id="menu-box">
            <button type="button" class={menuImageMode ? "light-mode-menu btn-icon" : "dark-mode-menu btn-icon"} on:click={menuClickEvt}></button>
        </div>
    
        <div id="light-box">
            <LightSwitch on:click={switchClickEvt}/>
        </div>
    </div>
</header>

<Drawer>
    <div id="drawer-limit-box">
        <div id="sub-header" class={menuImageMode ? "light-mode-line" : "dark-mode-line"}>
            <div id="drawer-close-box">
                <button type="button" class={menuImageMode ? "light-mode-close btn-icon" : "dark-mode-close btn-icon"} on:click={menuCloseBtnClickEvt}></button>
            </div>

            <div id="category-box">
                {#each categoryData as data}
                    <button type="button" class="btn category-btn">
                        {data.name}
                    </button>
                {/each}
            </div>
        </div>

        <div id="contents-box">
            <div id="before-click-text">카테고리를 클릭해 보세요. | Click the categories at the top.</div>

            <!-- todo : contentsArr로 중첩 돌리기 -->
        </div>
    </div>
</Drawer>

<!-- <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: kendis lasman - Flaticon</a> -->
<!-- <a href="https://www.flaticon.com/kr/free-icons/-" title="닫기 버튼 아이콘">닫기 버튼 아이콘  제작자: inkubators - Flaticon</a> -->