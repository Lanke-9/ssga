<template>
    <div class="home-jrzb">
        <right-title>
            <span slot="title-left">今日值班</span>
            <span class="more" slot="title-right">更多 ></span>
        </right-title>
        <div class="home-jrzb-wrapper">
            <jrzb-list :zb-list="zbList"/>
        </div>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";
import JrzbList from "./JrzbList";

export default {
    name: "HomeRightJrzb",
    props: {
        zbList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        RightTitle,
        JrzbList,
    },
}
</script>

<style scoped>
    .home-jrzb-wrapper{
        width: 100%;
        padding:0 10px;
        margin-bottom: 10px;
    }
</style>
