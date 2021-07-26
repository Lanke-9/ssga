<template>
    <div class="jrzb-list">
        <div class="swiper-container" id="case3">
            <div class="swiper-wrapper">
                <div class="swiper-slide jrzb-list-item" v-for="(item, i) in zbList" :key="i">
                    <span class="head">{{ item.head }}：</span>
                    <span class="name">{{ item.name }}</span>
                    <span class="phone">{{ item.phone }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/idangerous.swiper.css';

export default {
    name: "JrzbList",
    props: {
        zbList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    mounted() {
        const mySwiper3 = new Swiper('#case3', {
            autoplay: 5000,
            mode: 'vertical',
            slidesPerView: 2,
            speed: 1000,
            loop: true,
            autoplayDisableOnInteraction : false,
            simulateTouch: false,
        })
    },
}
</script>

<style scoped>
    .jrzb-list{
        width: 100%;
        height: 90px;
        overflow: hidden;
    }
    .jrzb-list-item{
        width: 100%;
        padding:0 15px;
        height: 40px;
        line-height: 40px;
        background-size: 100%;
        background: rgba(0,0,0,0);
        transition: all 0.4s;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.1);
    }
    .jrzb-list-item .head{
        margin-right: 15px;
    }
    .jrzb-list-item .name{
        font-weight: bold;
        margin-right: 10px;
    }
    .swiper-container{
        height: 100%;
    }
    .jrzb-list-item.swiper-slide-active{
        /*background: url("../../../assets/img/juxing2_03.png") no-repeat;*/
        background: #fff;
    }
</style>
