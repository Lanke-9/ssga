<template>
    <div class="home-link">
        <div class="home-link-item left">学校信箱</div>
        <div class="home-link-item left">办公平台</div>
        <div class="home-link-item left">教师退休</div>
        <div class="home-link-item left">学校管理</div>
    </div>
</template>

<script>
export default {
    name: "HomeLink"
}
</script>

<style scoped>
    .home-link{
        width: 100%;
        height: 90px;
        background: url("../../../assets/img/tiaofu2_13.png") no-repeat;
        background-size: cover;
    }
    .home-link-item{
        height: 100%;
        width: calc((100% - 3px) / 4);
        border-left: 1px solid #fff;
        line-height: 90px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #081552;
    }
    .home-link-item:first-child{
        border-left:0;
    }
</style>
