<template>
    <div class="history">
        <div class="history-image">
            <img src="../assets/pic/info.png">
        </div>
        <div class="history-text">
            <h2>历史文化</h2>
            <p>东安历史悠久，人杰地灵，山水秀美，物华天宝，是楚文化的重要发祥地之一，素有“舜风楚韵”之美誉，既是首批“全国武术之乡”，又是“中国德文化之乡”。</p>
            <button class="Button" @click="showPopup">更多信息</button>
            <Popup :visible="popupVisible" :content="popupContent" @close="closePopup" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Popup from './PopUp4History.vue';
var popupVisible = ref(false);
var popupContent = "HelloWorld";

function showPopup(){
    popupVisible.value = true;
}

function closePopup(){
    popupVisible.value = false;
}

</script>

<style scoped>
.history{
    display: flex;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    flex-wrap:nowrap;
}
.history-image{
    flex: 1;
    transform: scale(0.45);
    transform-origin: left top;
    width: 70%;
}
.history-text{
    flex:2;
    width:30%;
}

.Button{
    width: 100px;
    height: 40px;
    color: #000000e2; /* 文字颜色 */
    background: transparent; /* 清除背景色 */
    border: 3px solid #78b3ea; /* 边框样式、颜色、宽度 */
    border-radius: 8px; /* 给边框添加圆角 */
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
}
</style>