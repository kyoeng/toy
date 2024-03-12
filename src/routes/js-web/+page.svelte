<script lang="ts">
    import "./+page.scss";
    import Banner from "$components/banner/Banner.svelte";
    import darkMImg from "$assets/images/js-web/dark-mode-web-img.png";
    import lightMImg from "$assets/images/js-web/light-mode-web-img.png";
    import ContentsView from "$components/contentsView/ContentsView.svelte";


    // 배너에 들어갈 문구
    const infoText = "JavaScript를 활용한 Web Development";
</script>




<Banner darkMImg={darkMImg} lightMImg={lightMImg} infoText={infoText} />
<ContentsView contentsType="jsWeb" />