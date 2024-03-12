<script lang="ts">
    import "./Header.scss";
    import { LightSwitch, getModeOsPrefers, setModeCurrent, getDrawerStore, Drawer, type DrawerSettings } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
    import { categoryData, contentsData, contentsIconData } from "./data";
    import { categoryStore } from "$stores/headerStore";
    import { screenModeStore } from "$stores/commonStore";




    // 메뉴 클릭 시 나타낼 서랍장 옵션
    const drawerStore = getDrawerStore();
    const drawerSetting: DrawerSettings = { position: "top", height: "h-[400px]", duration: 300 }



    // 화면모드(라이트, 다크) 스위치 클릭 이벤트
    function switchClickEvt(): void {
        const beforeMode = localStorage.getItem("screenMode");
        const afterMode = beforeMode === "light" ? "dark" : "light";
        const mode = afterMode === "light" ? true : false;

        localStorage.setItem("screenMode", afterMode);
        screenModeStore.update(mode);
    }

    // 메뉴버튼 클릭 이벤트
    function menuClickEvt(): void {
        categoryStore.reset();
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
            screenModeStore.update(isLight);

        } else {
            const osMode = getModeOsPrefers();
            const value = osMode ? "light" : "dark";
            localStorage.setItem("screenMode", value);
            setModeCurrent(osMode);
            screenModeStore.update(osMode);
        }
    });
</script>




<!-- Header -->
<header id="head-container" class="bg-surface-100-800-token">
    <div id="limit-box">
        <h1 id="logo-box">
            <a href="/">Dev_NOTE º</a>
        </h1>
    
        <div id="menu-box">
            <button type="button" class={$screenModeStore ? "light-mode-menu btn-icon" : "dark-mode-menu btn-icon"} on:click={menuClickEvt}></button>
        </div>
    
        <div id="light-box">
            <LightSwitch on:click={switchClickEvt}/>
        </div>
    </div>
</header>


<!-- Drawer -->
<Drawer>
    <div id="drawer-limit-box">
        <div id="sub-header" class={$screenModeStore ? "light-mode-line" : "dark-mode-line"}>
            <div id="drawer-close-box">
                <button type="button" class={$screenModeStore ? "light-mode-close btn-icon" : "dark-mode-close btn-icon"} on:click={menuCloseBtnClickEvt}></button>
            </div>

            <div id="category-box">
                <!-- 각 언어 -->
                {#each categoryData as data}
                    <button type="button" class="btn category-btn" on:click={() => categoryStore.change(data.idx)}>
                        {data.name}
                    </button>
                {/each}
            </div>
        </div>


        <div id="contents-container">
            <!-- 언어 이미지 -->
            {#each contentsIconData as {idx, image, title}}
                <div class="lang-box" style={$categoryStore === idx ? "opacity: 1; left: 15px; visibility: visible; z-index: 1;" : "opacity: 0; left: -5%; visibility: hidden;"}>
                    <img src={image} alt="" class="lang-icon">
                    <h3 class="lang-title">{title}</h3>
                </div>
            {/each}


            <p id="info-text">
                이 사이트는 공부의 목적으로 만들어진 사이트입니다
            </p>


            <div id="contents-box">
                <div id="before-click-text" style={$categoryStore === -1 ? "" : "opacity: 0; left: 5%; visibility: hidden;"}>
                    카테고리를 클릭하세요
                </div>
    
                
                <!-- 각 언어별 컨텐츠 -->
                {#each contentsData as {idx, data}}
                    <div class="contents-flex-box" style={$categoryStore === idx ? "opacity: 1; left: 0; visibility: visible; z-index: 1;" : "opacity: 0; left: 5%; visibility: hidden;"}>
                        {#each data as {subject, lightModeImage, darkModeImage, goto}}
                            <div class="contents-view-box">
                                <a href={goto} class="link" on:click={menuCloseBtnClickEvt}>link</a>

                                <img src={$screenModeStore ? lightModeImage : darkModeImage} alt="" class="contents-img">
                                <h2 class="contents-title">{subject}</h2>
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</Drawer>
