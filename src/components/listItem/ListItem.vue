<template>
    <div class="list-item">
        <list-title><slot name="title"></slot></list-title>
        <div class="list-item-tab">
            <span class="list-item-text" :class="{active: current === i}" v-for="(item, i) in tabList" :key="i" @click="listToggle(i)">{{item}}</span>
        </div>
        <div v-if="showImg" class="list-item-img">
            <slot name="img"></slot>
        </div>

        <list :list="rList" :show-time="showTime" :is-top="isTop" text-size="100"/>
    </div>
</template>

<script>
import ListTitle from "../title/ListTitle";
import List from "../list/List";

export default {
    name: "ListItem",
    props: {
        tabList: {
            type: Array,
            default() {
                return []
            }
        },
        showImg: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            current: 0,
            showTime: false,
            isTop: false,
            rList: [],
        }
    },
    created() {
        this.rList = this.list[0];
    },
    methods: {
        listToggle(i) {
            this.current = i;
            this.rList = this.list[i];
        }
    },
    components: {
        ListTitle,
        List
    }
}
</script>

<style scoped>
    .list-item{
        width: calc((100% - 30px) / 2);
    }
    .list-item-tab{
        padding:0 20px;
        margin: 15px 0 20px;
    }
    .list-item-text{
        margin-right: 25px;
        color: #081552;
        padding-bottom:7px;
        cursor: pointer;
    }
    .list-item-text.active{
        font-weight: bold;
        border-bottom: 1px solid #081552;
    }
    .list-item-img{
        width: 100%;
        margin-bottom: 10px;
        margin-top: 25px;
    }
    .list-item-img img{
        width: calc((100% - 5px) / 3);
        margin-right:2px;
    }
    .list-item-img img:nth-child(3n){
        margin-right: 0;
    }
</style>
