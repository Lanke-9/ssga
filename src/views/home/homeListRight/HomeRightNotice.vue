<template>
    <div class="home-notice">
        <right-title>
            <span slot="title-left">通知公告</span>
            <span slot="title-right">更多 ></span>
        </right-title>
        <div class="home-notice-list">
            <right-list :list="noticeList" />
        </div>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";
import RightList from "../../../components/list/RightList";

export default {
    name: "HomeRightNotice",
    props: {
        noticeList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        RightTitle,
        RightList
    }
}
</script>

<style scoped>
    .home-notice-list{
        padding: 0 15px 10px;
    }
</style>
