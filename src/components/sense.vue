<script setup lang="ts">
import Card from './Card4Sense.vue';
import { ref } from 'vue'
const content = ref([
    ["舜皇山国家森林公园", "src/assets/pic/sense/1.jpg","http://www.da.gov.cn/da/msgj/201605/f44df09cc8634ee5966d948ebbba1289.shtml"],
    ["舜皇岩","src/assets/pic/sense/2.jpg","http://www.da.gov.cn/da/msgj/201605/2747f60bbdae4cb69fab4cbc5118f03c.shtml"],
    ["沉香寺","src/assets/pic/sense/3.png","https://baike.baidu.com/item/%E6%B2%89%E9%A6%99%E5%AF%BA/55956760"],
    ["九龙岩","src/assets/pic/sense/1.jfif","https://baike.baidu.com/item/%E4%B9%9D%E9%BE%99%E5%B2%A9%E7%9F%B3%E5%88%BB/2405542"],
    ["广利桥","src/assets/pic/sense/2.jfif","http://www.da.gov.cn/da/msgj/201605/0da36ecd1f35450e879a2fde856021da.shtml"]
])

function getInfo(index:number,num:number){
    if (num === 1){
        return "backgroundImage: url(" + content.value[index][num] + ")";
    }else{
        return content.value[index][num];
    }
}
</script>

<template>
    <div class="text">
        <h2>风景名胜</h2>
        <p>
            东安县内有名胜古迹100多处，其中重点文物保护单位20多处。有舜皇山国家森林公园（园内有堪与桂林七星岩媲美的舜皇岩），有历代名人题咏的九龙岩碑刻，有三国孔明、张飞等人的遗址，有全国重点文物保护单位树德山庄，即著名爱国将领唐生智先生的故居和他亲手创办的耀祥书院等。
        </p>
        <a href="http://www.da.gov.cn/da/fjms/201909/a2c39ee8873945b89687ee1cc103bb20.shtml" style="text-decoration-line: none; color:#399dfe ;">阅读原文</a>
    </div>
    <div class="top">
        <div v-for="(item,index) in content" :key="item[0]">
            <Card class="card" 
                  :style="getInfo(index,1)"
                  :title="getInfo(index,0)"
                  :width="300"
                  :headStyle="{ fontSize: '18px', color: '#fff', backgroundColor: '#ffffff00' , backdropFilter: 'blur(10px)'}"
                  :bodyStyle="{ fontSize: '16px', color: '#fff', backgroundColor: '#ffffff00'}">
                <template #extra><a :href="getInfo(index,2)" style="text-decoration: none;color: dodgerblue;">more</a></template>
            </Card>
        </div>
    </div>    
</template>

<style scoped>
.text{
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
}
.top{
    display: flex; 
    padding: 30px; 
    justify-content: space-around;
}

.card{
    height: 250px;
    color: #ffffff00;
    background-position: center;
}
</style>