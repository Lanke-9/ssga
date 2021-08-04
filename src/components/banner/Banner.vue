<template>
    <div class="banner">
        <div class="swiper-container" id="case1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in bannerList" :key="i">
                    <div class="banner-img"></div>
                </div>
            </div>
        </div>

        <div class="banner-desc">
            <div class="desc-wrapper auto-1200">
                <img class="logo left" src="../../assets/img/logo_03.png" alt="">
                <div class="logo-desc left">
                    <div class="logo-desc-zh">{{ currentTitle.zh }}</div>
                    <div class="logo-desc-en">{{ currentTitle.en }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/idangerous.swiper.css';

export default {
    name: "Banner",
    props: {
        bannerList: {
            type: Array,
            default(){
                return []
            }
        },
        currentTitle: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            value: 0
        }
    },
    mounted() {
        const mySwiper = new Swiper('#case1', {
            autoplay: 4000,
            speed: 1000,
            loop: true,
            autoplayDisableOnInteraction : false,
            simulateTouch: false
        })
    }
}
</script>

<style scoped>
    .banner{
        width:100%;
        position: relative;
        min-width: 1200px;
    }
    .banner-img{
        width:100%;
        height:248px;
        background-image: url("../../assets/img/banner_01.png");
        background-repeat:no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .banner-desc{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 30;
    }
    .logo {
        width: 84px;
        margin-top: calc((248px - 84px) / 2);
        margin-right: 25px;
    }
    .logo-desc{
        color: #fff;
        margin-top: calc((248px - 44px) / 2);
    }
    .logo-desc-zh {
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 5px;
    }
    .logo-desc-en{
        font-size: 12px;
        margin-top:5px;
    }
</style>
