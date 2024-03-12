<template>
    <div class="map">
    <div class="mapText">
        <h2 style="text-align: left;">地理位置</h2>
        <p>
            东安县位于湖南省西南部湘江上游，地处东经110°59′～110°34′，北纬26°7′～26°52′之间。东界永州市，南邻广西全州县，西接新宁县，北至邵阳县。是湖南通往广西、海南的重要门户。湘桂铁路、洛湛铁路、207国道、S217省道、二广高速公路穿境而过，衡昆高速公路出口到县城仅27 公里，距桂林仅130公里。
        </p>
        <a href="http://www.da.gov.cn/da/dlwz/201909/c883fb1c0b784f86a1c9dbee101346c4.shtml" style="text-decoration: none;color: dodgerblue;">阅读原文</a>
    </div>
      <div class="mapDiv" :class="state.copyright ? '' : 'hide-copyright'">
        <tdt-map :center="state.center" :zoom="state.zoom" :controls="state.controls">
          <tdt-control position="topright" :visible="state.visible">
          </tdt-control>
        </tdt-map>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from "vue";
  
  const state = reactive({
    center:[111.3164,26.39202],
    zoom: 11,
    controls: [
      "Zoom",
      "Scale",
      {
        name: "MapType",
        position: "topright",
        mapTypes: [
          {
            title: "地图", //地图控件上所要显示的图层名称
            icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png", //地图控件上所要显示的图层图标（默认图标大小 80x80）
            layer: "TMAP_NORMAL_MAP" //地图类型，在原天地图api中以window.TMAP_NORMAL_MAP表示，此处为字符串
          },
          {
            title: "卫星",
            icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png",
            layer: "TMAP_SATELLITE_MAP"
          },
          {
            title: "卫星混合",
            icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png",
            layer: "TMAP_HYBRID_MAP"
          }
        ]
      },
      {
        name: "OverviewMap",
        isOpen: true,
        anchor: "bottomright"
      },
    ],
    visible: true,
    copyright: false
  });
  </script>
  
  <script lang="ts">
  export default { name: "demo-control" };
  </script>
  
<style scoped>
  .map{
    margin-top: 5%;
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    flex-wrap:wrap;
  }
  .mapText{
    flex: 1;
    max-width: 40%;
    margin-top: 8%;
    margin-right: 5%;
  }
.mapDiv {
    flex: 1;
    min-width: 30%;
    max-width: 60%;
    height: 500px;
    z-index: 0;
  }
  ::v-deep.hide-copyright .tdt-control-copyright.tdt-control > div:not(.tdt-control-copyright) {
    display: none;
  }
</style>
