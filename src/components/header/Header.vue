<template>
    <div class="header">
        <banner :banner-list="bannerList" v-if="$store.state.currentTitle.currentBanner === 0" />
        <banner-other v-else />
        <nav-bar />
    </div>
</template>

<script>
import Banner from "../banner/Banner";
import BannerOther from "../banner/BannerOther";
import NavBar from "../navBar/NavBar";

export default {
    name: "Header",
    data(){
        return {
            bannerList: [
                {id: 1, image: '../img/banner_01.png'},
                {id: 2, image: '../img/banner_01.png'},
                {id: 3, image: '../img/banner_01.png'}
            ]
        }
    },
    components: {
        Banner,
        BannerOther,
        NavBar
    }
}
</script>

<style scoped>

</style>
