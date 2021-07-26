<template>
    <div class="right-title">
        <div class="right-title-left left"><slot name="title-left"></slot></div>
        <div class="right-title-right right"><slot name="title-right"></slot></div>
    </div>
</template>

<script>
export default {
    name: "RightTitle"
}
</script>

<style scoped>
    .right-title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        border-top: 1px solid #081552;
        overflow: hidden;
    }
    .right-title-left{
        color: #081552;
        font-weight: bold;
    }
    .right-title-right{
        color: #999;
        font-size: 14px;
    }
</style>
