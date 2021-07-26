<template>
    <div class="home-news">
        <div class="tab-title">
            <div class="title-left">
                <span class="title-text" v-for="(item, i) in tabList" :key="i" :class="{active: current === i}" @click="tabClick(i)">{{item}}</span>
            </div>
            <div class="title-right"><span>更多 ></span></div>
        </div>

        <first-news :news-list="rNewList"/>
    </div>
</template>

<script>
import FirstNews from "./FirstNews";

export default {
    name: "HomeNews",
    data() {
        return {
            current: 0,
            tabList: ['综合要闻', '学校动态'],
            rNewList: [],
            newsList:[
                [
                    {
                        title: '南京获“全国禁毒示范城市”称号',
                        id: 1,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '百年盛典 习近平总书记重要讲话赢得世界赞誉',
                        id: 2,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '中共中央办公厅发出通知 要求认真学习贯彻习近平总书记中共中央办公厅发出通知 要求认真学习贯彻习近平总书记',
                        id: 3,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '警界新青年 忠诚写担当',
                        id: 4,
                        date: '2021-06-24',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '中共中央办公厅发出通知 要求认真学习贯彻习近平总书记',
                        id: 5,
                        date: '2021-06-23',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '习近平同神舟十二号航天员亲切通话',
                        id: 6,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    }
                ],
                [
                    {
                        title: '百年盛典 习近平总书记重要讲话赢得世界赞誉',
                        id: 1,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '南京获“全国禁毒示范城市”称号',
                        id: 2,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '中共中央办公厅发出通知 要求认真学习贯彻习近平总书记中共中央办公厅发出通知 要求认真学习贯彻习近平总书记',
                        id: 3,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '警界新青年 忠诚写担当',
                        id: 4,
                        date: '2021-06-24',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '中共中央办公厅发出通知 要求认真学习贯彻习近平总书记',
                        id: 5,
                        date: '2021-06-23',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    },
                    {
                        title: '习近平同神舟十二号航天员亲切通话',
                        id: 6,
                        date: '2021-06-25',
                        important: 0,
                        content: '习近平在贺信中表示美，值此柬埔寨人民党成立70周年之际，我谨代表中国共产党、中国人民并以我个人名义，向洪森主席、柬埔寨人民'
                    }
                ]
            ],
        }
    },
    created() {
        this.rNewList = this.newsList[0];
    },
    methods: {
        tabClick(i) {
            this.current = i;
            this.rNewList = this.newsList[i];
        }
    },
    components: {
        FirstNews
    }
}
</script>

<style scoped>
    .home-news{
        width: 550px;
    }
    .tab-title{
        width: 100%;
        height: 40px;
        background: url("../../../assets/img/juxing_03.png") no-repeat;
        background-size: cover;
        margin-bottom: 30px;
    }
    .title-left{
        float: left;
        line-height: 40px;
    }
    .title-left span{
        display: inline-block;
        padding: 0 20px;
        color:#fff;
        font-weight: bold;
        cursor: pointer;
        border-top: 2px solid rgba(0, 0, 0, 0);
        border-left: 1px solid #ddd;
    }
    .title-left span.active{
        color: #081552;
        background: #fff;
        border-top: 2px solid #081552;
    }
    .title-right{
        float: right;
    }
    .title-right span{
        font-size: 14px;
        color:#999;
        line-height: 40px;
    }
</style>
