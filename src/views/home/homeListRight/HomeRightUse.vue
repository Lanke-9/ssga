<template>
    <div class="school-use">
        <right-title>
            <div slot="title-left">
                <span class="school-use-tab" :class="{'school-use-active': current === i}" v-for="(item,i) in useList" :key="i" @click="useTab(i)">{{ item.title }}</span>
            </div>
            <span slot="title-right">更多 ></span>
        </right-title>
        <div class="school-use-list">
            <right-list :list="useListData" />
        </div>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";
import RightList from "../../../components/list/RightList";

export default {
    name: "HomeRightUse",
    props: {
        useList: {
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
        RightList
    },
    computed: {
        useListData() {
            return this.useList[this.current].list;
        }
    },
    methods: {
        useTab(i) {
            this.current = i;
        }
    }
}
</script>

<style scoped>
    .school-use-tab{
        color: #666;
        font-weight: normal;
        cursor: pointer;
        padding-bottom:8px;
    }
    .school-use-tab:first-child{
        margin-right: 30px;
    }
    .school-use-tab.school-use-active{
        color: #081552;
        font-weight: bold;
        border-bottom: 1px solid #081552;
    }
    .school-use-list{
        padding: 0 5px;
        margin-top: 10px;
    }
</style>
