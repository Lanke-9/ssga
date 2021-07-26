<template>
    <div class="home auto-1200">
        <div class="tiao-fu-1"><img src="../../assets/img/tiaofu1_07.png" alt=""></div>
        <div class="home-container">
            <div class="home-top">
                <div class="home-top-left left"><home-slide/></div>
                <div class="home-top-right right"><home-news/></div>
            </div>
            <home-link />
            <div class="home-list">
                <div class="home-list-left left"><home-list-left/></div>
                <div class="home-list-right right"><home-list-right/></div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeSlide from "./homeTop/HomeSlide";
import HomeNews from "./homeTop/HomeNews";
import HomeLink from "./homeLink/HomeLink";
import HomeListLeft from "./homeListLeft/HomeListLeft";
import HomeListRight from "./homeListRight/HomeListRight";

export default {
    name: "Home",
    components: {
        HomeSlide,
        HomeNews,
        HomeLink,
        HomeListLeft,
        HomeListRight
    },
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 0,
            zh: '南京警察学院',
            en: 'Nanjing Municipal Public Security Bureau'
        });
    }
}
</script>

<style scoped>
    .home{
        background: #fff;
    }
    .tiao-fu-1 img{
        width: 100%;
    }
    .home-container{
        padding:30px;
    }
    .home-top-left{
        width: 560px;
        height: 372px;
        overflow: hidden;
    }
    .home-top{
        overflow: hidden;
        margin-bottom:20px;
    }
    .home-list{
        overflow: hidden;
        margin-top: 40px;
    }
    .home-list-left{
        width: 795px;
    }
    .home-list-right{
        width: 315px;
    }
</style>
