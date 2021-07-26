<template>
    <div class="tab-bar">
        <div class="tab-wrapper auto-1200">
            <nav-bar-item link="/home"><span>首页</span></nav-bar-item>
            <nav-bar-item link="/construction"><span>学校建设</span></nav-bar-item>
            <nav-bar-item link="/technology"><span>学校科技</span></nav-bar-item>
            <nav-bar-item link="/system"><span>学校制度</span></nav-bar-item>
            <nav-bar-item link="/schoolArchives"><span>学校档案</span></nav-bar-item>
            <nav-bar-item link="/download"><span>资料下载</span></nav-bar-item>
            <nav-bar-item link="/addressBook"><span>学校通讯录</span></nav-bar-item>
        </div>
    </div>
</template>

<script>
import NavBarItem from "./NavBarItem";

export default {
    name: "NavBar",
    components: {
        NavBarItem
    }
}
</script>

<style scoped>
    .tab-bar{
        width: 100%;
        height: 45px;
        background: #081552;
    }
    .tab-wrapper{
        overflow: hidden;
    }
</style>
