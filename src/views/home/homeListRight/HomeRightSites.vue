<template>
    <div class="home-sites">
        <right-title>
            <span slot="title-left">站点导航</span>
        </right-title>
        <div class="site-list">
            <a class="site-list-item" href="" v-for="(item, i) in siteList" :key="i">{{ item }}</a>
        </div>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";

export default {
    name: "HomeRightSites",
    props: {
        siteList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        RightTitle
    }
}
</script>

<style scoped>
    .site-list{
        padding: 0 15px;
        overflow: hidden;
    }
    .site-list-item{
        float: left;
        height: 35px;
        line-height: 35px;
        background: #fff;
        border-radius: 4px;
        width: calc((100% - 6px) / 2);
        margin-right:6px;
        margin-bottom: 6px;
        padding: 0 15px;
        box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.1);
        transition: all 0.4s;
    }
    .site-list-item:hover {
        background: rgba(8, 21, 82, 0.8);
        color: #fff;
    }
    .site-list-item:nth-child(2n){
        margin-right: 0;
    }
</style>
