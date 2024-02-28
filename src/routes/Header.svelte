<script lang="ts">
    import { LightSwitch, getModeOsPrefers, setModeCurrent, getDrawerStore, Drawer, type DrawerSettings } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";

    let menuImageMode: boolean;
    const drawerStore = getDrawerStore();
    const drawerSetting: DrawerSettings = {
        position: "top",
    }

    
    function switchClickEvt(): void {
        const bfMode = localStorage.getItem("screenMode");
        const afMode = bfMode === "light" ? "dark" : "light";

        localStorage.setItem("screenMode", afMode);
        menuImageMode = !menuImageMode;
    }


    function menuClickEvt(): void {
        console.log("click");
        drawerStore.open(drawerSetting);
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




<header id="head-container" class="bg-surface-100-800-token">
    <div id="limit-box">
        <h1 id="logo-box">
            <a href="/">NOTE º</a>
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
        <div id="sub-header">
            <div id="drawer-close-box">
                <button type="button" class={menuImageMode ? "light-mode-close btn-icon" : "dark-mode-close btn-icon"} on:click={() => drawerStore.close()}></button>
            </div>
        </div>
    </div>
</Drawer>

<!-- <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: kendis lasman - Flaticon</a> -->
<!-- <a href="https://www.flaticon.com/kr/free-icons/-" title="닫기 버튼 아이콘">닫기 버튼 아이콘  제작자: inkubators - Flaticon</a> -->


<style>
    #head-container {
        width: 100%;
        height: 70px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
    }
    
    /* *************** in header *************** */
    #limit-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1280px;
        height: 100%;
        margin: 0 auto;
    }

    /* ----- logo-box ----- */
    #logo-box {
        order: 1;
        height: 100%;
    }
    
    #logo-box > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 28px;
    }

    /* ----- menu-box ----- */
    #menu-box {
        order: 0;
    }

    .light-mode-menu {
        width: 50px;
        height: 50px;
        background: url("$lib/assets/images/lightMode-menu.png") no-repeat center center/80%;
    }

    .dark-mode-menu {
        width: 50px;
        height: 50px;
        background: url("$lib/assets/images/darkMode-menu.png") no-repeat center/80%;
    }
    
    /* ----- light-box ----- */
    #light-box {
        order: 2;
    }
    
    /* ----- menu, light ----- */
    #menu-box,
    #light-box {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }



    /* *************** in Drawer *************** */
    #drawer-limit-box {
        display: flex;
        justify-content: space-between;
        max-width: 1280px;
        height: 100%;
        margin: 0 auto;
    }

    #sub-header {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }

    #drawer-close-box {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .light-mode-close {
        width: 50px;
        height: 50px;
        background: url("$lib/assets/images/lightMode-close.png") no-repeat center center/80%;
    }

    .dark-mode-close {
        width: 50px;
        height: 50px;
        background: url("$lib/assets/images/darkMode-close.png") no-repeat center center/80%;
    }
</style>