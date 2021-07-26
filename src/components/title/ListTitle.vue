<template>
    <div class="title">
        <div class="title-text left"><slot></slot></div>
        <span class="title-more right">更多 ></span>
    </div>
</template>

<script>
export default {
    name: "Title",
}
</script>

<style scoped>
    .title{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: url("../../assets/img/juxing_03.png") no-repeat;
        background-size: cover;
    }
    .title-text{
        color: #fff;
        padding:0 15px;
        font-weight: bold;
    }
    .title-more{
        font-size:14px;
        color: #999;
        cursor: pointer;
    }
    .title-more:hover{
        text-decoration: underline;
    }
</style>
