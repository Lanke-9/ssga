<template>
    <div class="header">
        <banner :banner-list="bannerList" v-if="isBannerShow === 0" :current-title="currentTitle" />
        <banner-other v-else :current-banner="currentBanner" :current-title="currentTitle" />
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
            ],
            isBannerShow: 0,
            currentBanner: 1,
            currentTitle: {
                zh: '南京警察学院',
                en: 'Nanjing Municipal Public Security Bureau'
            }
        }
    },
    watch: {
        $route(to, from) {
            if(to.path !== '/home') {
                this.isBannerShow = 1;
            }else {
                this.isBannerShow = 0;
                this.currentTitle = {
                    zh: '南京警察学院',
                    en: 'Nanjing Municipal Public Security Bureau'
                }
            }

            switch (to.path) {
                case '/construction' :
                    this.currentBanner = 1;
                    this.currentTitle = {
                        zh: '学校建设',
                        en: 'School Construction'
                    };
                    break;
                case '/technology' :
                    this.currentBanner = 2;
                    this.currentTitle = {
                        zh: '学校科技',
                        en: 'School Technology'
                    };
                    break;
                case '/system' :
                    this.currentBanner = 3;
                    this.currentTitle = {
                        zh: '学校制度',
                        en: 'School System'
                    };
                    break;
                case '/schoolArchives' :
                    this.currentBanner = 4;
                    this.currentTitle = {
                        zh: '学校档案',
                        en: 'School Archives'
                    };
                    break;
                case '/download' :
                    this.currentBanner = 5;
                    this.currentTitle = {
                        zh: '资料下载',
                        en: 'Download'
                    };
                    break;
                case '/addressBook' :
                    this.currentBanner = 6;
                    this.currentTitle = {
                        zh: '学校通讯录',
                        en: 'School Address Book'
                    };
                    break;
            }

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
