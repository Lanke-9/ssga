<template>
    <div class="home-link">
        <div class="home-link-item left" v-for="(item, i) in linkList" :key="i">
            {{ item }}
            <img class="home-link-star" src="../../../assets/img/star.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeLink",
    data() {
        return {
            linkList: ['学校信箱', '办公平台', '教师退休', '学校管理']
        }
    }
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
        position: relative;
        cursor: pointer;
    }
    .home-link-item:first-child{
        border-left:0;
    }
    .home-link-star {
        position: absolute;
        top:0;
        right: 0;
        display: none;
    }
    .home-link-item:hover .home-link-star{
        display: inline-block;
    }
</style>
