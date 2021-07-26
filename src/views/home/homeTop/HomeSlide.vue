<template>
    <div class="home-slide">
        <div class="swiper-container" id="case2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="home-slide-img" src="../../../assets/img/zu1_03.png" alt="">
                    <div class="home-slide-text"><span>【普法】走进校园 宣传禁毒【普法】走进校园 宣传禁毒【普法】走进校园 宣传禁毒</span></div>
                </div>
                <div class="swiper-slide">
                    <img class="home-slide-img" src="../../../assets/img/zu1_03.png" alt="">
                    <div class="home-slide-text"><span>【普法】走进校园 宣传禁毒</span></div>
                </div>
                <div class="swiper-slide">
                    <img class="home-slide-img" src="../../../assets/img/zu1_03.png" alt="">
                    <div class="home-slide-text"><span>【普法】走进校园 宣传禁毒</span></div>
                </div>
            </div>
            <div class="pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/idangerous.swiper.css';

export default {
    name: "HomeSlide",
    mounted() {
        const mySwiper2 = new Swiper('#case2', {
            autoplay: 4000,
            speed: 1000,
            loop: true,
            autoplayDisableOnInteraction : false,
            pagination : '.pagination',
            paginationClickable : false,
            simulateTouch: false
        })
    },
}
</script>

<style scoped>
    .home-slide{
        width:560px;
        height:372px;
        position: relative;
    }
    .home-slide .swiper-container{
        height: 100%;
    }
    .home-slide .swiper-slide{
        height: 372px !important;
    }
    .home-slide-img {
        width:100%;
    }
    .pagination {
        position: absolute;
        z-index: 20;
        bottom: 15px;
        text-align: center;
        right: 20px;
    }
    .home-slide-text{
        width:560px;
        position:absolute;
        background: rgba(8, 21, 82, 0.4);
        bottom:0;
        z-index:19;
        padding:15px 20px;
    }
    .home-slide-text span{
        display: block;
        color:#fff;
        width:80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
