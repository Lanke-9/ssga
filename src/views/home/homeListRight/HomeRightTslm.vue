<template>
    <div class="home-tslm">
        <div class="home-tslm-title">
            <right-title>
                <span slot="title-left">特色栏目</span>
            </right-title>
        </div>
        <ul class="tslm-list">
            <li class="tslm-list-item" v-for="(item, i) in tslmList" :key="i">
                <span class="tslm-list-text left">{{ item.title }}</span>
                <span class="tslm-list-plus right">+</span>
            </li>
        </ul>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";

export default {
    name: "HomeRightTslm",
    props: {
        tslmList: {
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
    .home-tslm-title{
        background: #F1F2F6;
    }
    .tslm-list-item{
        overflow: hidden;
        padding:0 15px;
        line-height: 45px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        transition: all 0.4s;
    }
    .tslm-list-item:hover{
        background: rgba(8, 21, 82, 0.8);
        color: #fff;
    }
    .tslm-list-plus{
        font-size: 18px;
        color: #F86600;
    }
</style>
