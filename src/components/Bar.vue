<!-- <script setup lang="ts">
   
</script>

<template>
    
</template> -->


<template>
    <div class="scroll">
        <div class="nav" :class="navBarFixed == true ? 'navBarWrap':''">
            <div class="buttonContainer" @click="clicked">
                <!-- <router-link to="/Home#Home" tag="button">Home</router-link>
                <router-link to="/Home#Map" tag="button">Map</router-link>
                <button class="button">住</button>
                <button class="button" onclick="scrollToElement('#Map')">行</button>
                <button class="button">景</button>  -->
                东安
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref , onMounted } from 'vue';
    let navBarFixed = ref(false);

    function watchScroll() {
        var scrollTop = 
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        
        if( scrollTop > 90 ){
            navBarFixed.value = true
        }else{
            navBarFixed.value = false
        }

    }

    onMounted(() => {
        window.addEventListener("scroll", watchScroll)
    })

    function clicked(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

</script>

<style scoped>
.scroll{
    display: flex;
    height: 100px;
}
.nav{ 
    text-align: center;
    margin: auto;
    padding: 10px;
    width:80%;
    border-color: rgba(72, 77, 82, 0.336);
    border-style: solid;
    border-width: 4px;
    border-radius: 20px;
    box-sizing: border-box;
    background:rgba(255, 255, 255, 0);
    text-align: center;
    backdrop-filter: blur(10px);
}
.navBarWrap {
    position:fixed;
    left: 10%;
    top:0;
    z-index:998;
}

.buttonContainer{
    text-align: center;
    /* display: flex; */
    /* justify-content: space-between; */
    align-items: center
}

.button{
    width: 50px;
    height: 30px;
    border-radius: 10px;
    border-style: solid;
    background-color: #FFFFFF00;
}

.buttonOn{
    border-color: cyan;
}

</style>