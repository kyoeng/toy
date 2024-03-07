<script lang="ts">
    import { staticSourceData } from "$lib/data/commonData";
import "./Footer.scss";
</script>




<div id="footer-container" class="bg-surface-100-800-token">
    <div id="limit-container">
        <div id="left">
            <div id="source-box">
                <p id="source-info-title">이미지 출처</p>

                <div id="static-source-box">
                    {#each staticSourceData as link}
                        {@html link}
                    {/each}
                </div>
            </div>
        </div>

        <div id="right">
            <!-- 공유 버튼 만들기 -->
            <div id="share-box">
                <div class="temp"></div>
                <div class="temp"></div>
                <div class="temp"></div>
            </div>
        </div>

        <a href="/" id="git-address">
            github 주소
        </a>

        <div id="site-info-box">
            이 사이트는 학습을 위한 사이트로 공부의 내용을 공유하기 위해 만들어진 사이트입니다.
        </div>
    </div>
</div>