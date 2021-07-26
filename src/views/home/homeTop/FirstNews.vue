<template>
    <div class="f-news">
        <div class="yaowen">
            <img class="f-news-img left" src="../../../assets/img/important_06.png" alt="">
            <div class="f-news-content left">
                <div class="f-news-tit">{{newsList[0].title}}</div>
                <div class="f-news-date">{{newsList[0].date}}</div>
                <div class="f-news-text ellipsis-2">{{newsList[0].content}}</div>
            </div>
        </div>

        <list :list="newsList" :show-time="showTime" :is-top="isTop" text-size="420"/>

    </div>
</template>

<script>
import List from "../../../components/list/List";

export default {
    name: "FirstNews",
    props: {
        newsList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            showTime: true,
            isTop: true
        }
    },
    components: {
        List
    }
}
</script>

<style scoped>
    .yaowen{
        overflow: hidden;
        width: 100%;
        border-bottom: 1px dashed #e5e5e5;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .f-news-img {
        margin-right:15px;
    }
    .f-news-content{
        width: 513px;
    }
    .f-news-tit{
        font-size: 22px;
        font-weight: bold;
        color: #081552;
        line-height: 100%;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .f-news-tit:hover{
        text-decoration: underline;
    }
    .f-news-date{
        font-size: 14px;
        color: #999;
        margin-bottom: 10px;
    }
    .f-news-text{
        font-size: 14px;
        color: #777;
        line-height:20px;
    }
</style>
