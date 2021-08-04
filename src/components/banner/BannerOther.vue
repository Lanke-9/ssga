<template>
    <div class="banner-other">
        <div v-for="(item, i) in num" :key="i" v-if="currentBanner === item" class="banner-bg" :class="'banner-bg-'+item"></div>

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
export default {
    name: "BannerOther",
    props: {
        currentBanner: {
            type: Number,
            default: 1
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
            num: [1, 2, 3, 4, 5, 6]
        }
    }
}
</script>

<style scoped>
    .banner-other{
        width:100%;
        position: relative;
        min-width: 1200px;
    }
    .banner-bg{
        width: 100%;
        height:248px;
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
    .banner-bg-1{
        background: url('../../assets/img/banner_01.png') no-repeat center center;
    }
    .banner-bg-2{
        background: url('../../assets/img/banner_02.png') no-repeat center center;
    }
    .banner-bg-3{
        background: url('../../assets/img/banner_03.png') no-repeat center center;
    }
    .banner-bg-4{
        background: url('../../assets/img/banner_04.png') no-repeat center center;
    }
    .banner-bg-5{
        background: url('../../assets/img/banner_05.png') no-repeat center center;
    }
    .banner-bg-6{
        background: url('../../assets/img/banner_06.png') no-repeat center center;
    }
</style>
