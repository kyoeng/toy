<script>
    import { LightSwitch } from "@skeletonlabs/skeleton";
</script>



<style>
    #head-container {
        width: 100%;
        height: 70px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
    }
    
    #limit-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1280px;
        height: 100%;
        margin: 0 auto;
    }

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

    #menu-box,
    #light-box {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #menu-box {
        order: 0;
    }

    #menu-box button {
        width: 50px;
        height: 50px;
    }
    
    #light-box {
        order: 2;
    }
</style>




<header id="head-container" class="bg-surface-100-800-token">
    <div id="limit-box">
        <h1 id="logo-box">
            <a href="/">JinWoo's Note</a>
        </h1>
    
        <div id="menu-box">
            <button type="button" class="btn-icon"></button>
        </div>
    
        <div id="light-box">
            <LightSwitch />
        </div>
    </div>
</header>



<!-- <a href="https://www.flaticon.com/kr/free-icons/" title="메뉴 아이콘">메뉴 아이콘  제작자: ariefstudio - Flaticon</a> -->