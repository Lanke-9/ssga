<template>
    <div class="rank">
        <div class="rank-title">
            <right-title>
                <span slot="title-left">学校信息排行</span>
                <div slot="title-right">
                    <span class="rank-tab" :class="{active: current === i}" v-for="(item, i) in rankList" :key="i" @click="rankTab(i)">{{ item.date }}</span>
                </div>
            </right-title>
        </div>
        <div class="rank-wrapper">
            <rank-list :rank-list-item="rankListItem" />
        </div>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";
import RankList from "../../../components/rankList/RankList";

export default {
    name: "HomeRightRank",
    props: {
        rankList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data(){
        return {
            current: 0
        }
    },
    components: {
        RightTitle,
        RankList
    },
    computed: {
        rankListItem() {
            return this.rankList[this.current].data;
        }
    },
    methods: {
        rankTab(i) {
            this.current = i;
        }
    }
}
</script>

<style scoped>
    .rank-title {
        background: #F1F2F6;
        margin-bottom: 20px;
    }
    .rank-tab {
        color: #999;
        font-size: 16px;
        cursor: pointer;
        padding-bottom: 5px;
    }
    .rank-tab:first-child{
        margin-right: 20px;
    }
    .rank-tab.active {
        color: #081552;
        font-weight: bold;
        border-bottom: 1px solid #081552;
    }
</style>
