<template>
    <div class="rank-list">
        <div class="rank-list-title">
            <div class="rank-list-tab left">
                <span class="rank-list-text" :class="{'rank-list-active': current === i}" v-for="(item, i) in rankListItem" :key="i" @click="rankListTab(i)">{{ item.title }}</span>
            </div>
            <div class="rank-list-net right">
                <span>内网</span>
                <span>外网</span>
            </div>
        </div>
        <ul class="rank-list-ul"
            v-loading="loading"
            element-loading-text="加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 1)">
            <li class="rank-list-li" v-for="(item, i) in dataList" :key="i">
                <img class="rank-li-img left" src="../../assets/img/-_09.png" alt="">
                <span class="rank-li-name left">{{ item.name }}</span>
                <span class="rank-li-innetwork left">{{ item.inNetwork }}</span>
                <span class="rank-li-outnetwork left">{{ item.outNetwork }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    name: "RankList",
    props: {
        rankListItem: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            current: 0,
            loading: false
        }
    },
    computed: {
        dataList(){
            return this.rankListItem[this.current].result;
        }
    },
    methods: {
        rankListTab(i) {
            if(this.current !== i){
                this.openLoading();
            }
            this.current = i;
        },
        openLoading() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            },1000)
        }
    }
}
</script>

<style scoped>
    .rank-list{
        padding:0 5px;
    }
    .rank-list-title{
        padding: 0 10px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .rank-list-text {
        color: #888;
        font-weight: bold;
        cursor: pointer;
    }
    .rank-list-text:first-child {
        margin-right: 30px;
    }
    .rank-list-text.rank-list-active{
        color: #081552;
    }
    .rank-list-net{
        font-weight: bold;
    }
    .rank-list-net span{
        display: inline-block;
        width: 50px;
    }
    .rank-list-net span:first-child{
        margin-right: 34px;
    }
    .rank-list-li{
        overflow: hidden;
        margin-bottom: 20px;
    }
    .rank-li-img{
        margin-right: 6px;
        margin-top: 7px;
    }
    .rank-li-name{
        width: 140px;
        margin-right: 10px;
    }
    .rank-li-innetwork{
        width: 75px;
        margin-right: 10px;
        font-weight: 300;
    }
    .rank-li-outnetwork{
        width: 58px;
        font-weight: 300;
    }
</style>
