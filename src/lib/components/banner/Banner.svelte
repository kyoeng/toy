<script lang="ts">
    import "./Banner.scss";
    import { screenModeStore } from "$lib/stores/commonStore";

    export let darkMImg: string;
    export let lightMImg: string;
    export let infoText: string;
</script>




<div id="introduction-container">
    <img id="introduction-bg" src={$screenModeStore ? lightMImg : darkMImg} alt="bannerImg">
    <h2 id="introduction-info-text">{infoText}</h2>
</div>