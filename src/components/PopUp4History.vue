<template>
    <div v-if="visible" class="popup">
      <!-- 弹窗的内容 -->
      <div class="popup-content">
      <div class="Button">
        <button class="unselectedButton" :class="{selectedButton: selected===1}" @click="clicked(1)" >境域变动</button>
        <button class="unselectedButton" :class="{selectedButton: selected===2}" @click="clicked(2)" >历史隶属</button>
        <button class="unselectedButton" @click="closePopup">关闭</button>
    </div>
        <table v-show="selected===1">
                <tr v-for="item in size">
                    <td v-for="it in item">
                        {{it}}
                    </td>
                </tr>
        </table>

        <textarea class="text" v-show="selected===2" readonly="true">
建县前：

春秋战国时境域属楚南境。
秦时属长沙郡。
汉武帝元鼎六年（公元前111），境域属零陵郡洮阳县（《晋书·地理志》）。
三国赤壁之战后，境内属蜀零陵郡，蜀章武二年（222）属吴之零陵郡。

建县后：
西晋惠帝永熙元年（290）析零陵郡观阳县置应阳县，隶零陵郡。境域始建县，即东安县前身。《水经注》云：应阳县“盖既应水为名也”（《宋书·地理志》）。
南朝宋武帝永初元年（420），应阳县改应阳男国。
南朝陈宣帝太建五年（573），应阳改男国为子国。陈后主至德四年（586），应阳改为公国，仍属零陵郡。
隋文帝开皇九年（589），应阳县并处零陵县。
唐昭宗光化元年（898），马殷取永州，在原应阳境内立东安场。
五代时，境域属楚永州府零陵县地。
宋太宗雍熙元年（984），析零陵县地，升东安场置东安县，属永州零陵郡。境域复立县。
元世祖至元十四年（1277），改永州零陵郡为永州路，县属永州路。
明洪武元年（1368），属永州府。
清康熙三年（1664），隶属湖南省衡永郴道永州府。
民国3年（1914），属衡阳道。
民国29年（1940）至县境解放，属第七行政督察区。

中华人民共和国

1949年10月，属永州专区（后改零陵专区）。
1952年11月，属湘南行政区。
1954年7月，属衡阳专署。
1962年12月，属零陵专署。
1968年属零陵地区(后改永州市)至今。
        </textarea>

      </div>
    </div>
</template>
   
<script setup lang="ts">
import{ ref } from 'vue';
var selected = ref(1);
interface props{
    visible: boolean,
    content: string,
}

const props = withDefaults(
    defineProps<props>(),{
        visible: false
    }
)

defineExpose({closePopup})
const emit = defineEmits(['close'])
function closePopup(){
    emit('close')
}

const size = [
    ["时间","来源","内容"],
    ["1694 (清康熙三十三年)", "《永州府志》", "东安县疆域袤二百里，广八十五里。"],
    ["1875 (清光绪元年)", "《东安县志》", "东安县南北纵长178里，东西境宽135里。"],
    ["-", "《湖南通志》", "东安南北袤百九十里，东西广百里。"],
    ["1931 (民国20年)", "《湖南省各县调查笔记》", "东安县总面积约2512.5平方公里。"],
    ["1935-1949（民国24年至新中国成立）", "", "东安总面积为2256.7平方公里。"],
    ["1952年", "《县志》", "零陵县株山乡将大月塘和陡岗划归东安县今高峰乡管辖，涉及土地面积8.764平方公里。"],
    ["1975年", "《县志》", "因在桃林村和高视村境内修建‘零东跃进水库’，零陵县蔡家铺乡将桃林村划归零陵县管辖。"],
    ["1982年", "《县志》", "邵阳县五丰铺因在东安县大水乡枇杷、新建两村境内修建‘金江水库’，将该两村划归邵阳县管辖，涉及土地面积5.076平方公里。"],
    ["1988年", "《县志》", "经过与毗邻县多次调整山界纠纷后，东安县周界接六县（市），周长为468.41公里。"]
]
function clicked(num:number){
    selected.value = num;
}
</script>
   
<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    flex-wrap: wrap;
    backdrop-filter: blur(20px);
}
   
.popup-content {
    background: rgba(255, 255, 255, 0.8);
    width: 70%;
    height: 70%;
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(50px);
}
.Button{
    display: flex;
    justify-content: space-between;
}
.unselectedButton{
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
.selectedButton{
    color: #ffffff;
    background-color: #78b3ea;
}

.text{
    scrollbar-width: none;
    resize: none;
    margin-top: 10px;
    width: 100%;
    height: 90%;
    font-size: 20px;
    border-radius: 8px;
    display: inline-block;
    background-color: #ffffff00;
}

.text::-webkit-scrollbar{
  display: none;
}

</style>