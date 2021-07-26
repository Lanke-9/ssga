<template>
    <div class="home-right-container">
        <div class="home-right-top">
            <home-right-jrzb :zb-list="zbList"/>
            <home-right-notice :notice-list="noticeList"/>
            <home-right-sites :site-list="siteList" />
        </div>
        <div class="home-right-tslm">
            <home-right-tslm :tslm-list="tslmList" />
        </div>
        <div class="home-right-video">
            <home-right-video :video="video" />
        </div>
        <div class="home-right-rank">
            <home-right-rank :rank-list="rankList" />
        </div>
        <div class="home-right-use">
            <home-right-use :use-list="useList" />
        </div>
        <div class="home-right-program">
            <home-right-program :program-list="programList" />
        </div>
    </div>
</template>

<script>
import HomeRightJrzb from "./HomeRightJrzb";
import HomeRightNotice from "./HomeRightNotice";
import HomeRightSites from "./HomeRightSites";
import HomeRightTslm from "./HomeRightTslm";
import HomeRightVideo from "./HomeRightVideo";
import HomeRightRank from "./HomeRightRank";
import HomeRightUse from "./HomeRightUse";
import HomeRightProgram from "./HomeRightProgram";

export default {
    name: "HomeListRight",
    data(){
        return {
            zbList: [
                {
                    head: '正班',
                    name: '张俊彦',
                    phone: '1827365553'
                },
                {
                    head: '副班',
                    name: '何俊贤',
                    phone: '1567365553'
                },
                {
                    head: '副班',
                    name: '何俊贤',
                    phone: '1567365553'
                }
            ],
            noticeList: [
                {
                    title: '习近平亲密接触新媒体释放了什么信号',
                    important: 1,
                },
                {
                    title: '新闻舆论工作重在“走心” |以马克思主义新闻观统领新闻舆论',
                    important: 0,
                },
                {
                    title: '党和政府的喉舌就是人民的喉舌',
                    important: 0,
                },
                {
                    title: '八个字看懂习近平关于新闻舆论工作的重要讲话的内容要义',
                    important: 0,
                },
                {
                    title: '在中国科学院第十二次院士大会、中国工程院第十五次院士大会、中国科学院第十二次院士大会',
                    important: 0,
                }
            ],
            siteList: [
                '全国学校站点',
                '省内公安站点',
                '分校站点',
                '学校站点',
            ],
            tslmList: [
                {title: '学校荣誉栏'},
                {title: '学习栏'},
                {title: '网上学校'},
                {title: '学校监督'},
                {title: '网上考场'},
                {title: '学校博物馆'},
                {title: '学校咨询台'}
            ],
            video: {
                image: '',
                title: '特大盗窃案侦破情况新闻发布会'
            },
            rankList: [
                {
                    date: '2021',
                    data: [
                        {
                            title: '分校',
                            result: [
                                {
                                    name: '秦淮区分局',
                                    inNetwork: 350.5,
                                    outNetwork: 67
                                },
                                {
                                    name: '鼓楼区分局',
                                    inNetwork: 208,
                                    outNetwork: 8
                                },
                                {
                                    name: '建邺区分局',
                                    inNetwork: 189,
                                    outNetwork: 19
                                },
                                {
                                    name: '栖霞区分局',
                                    inNetwork: 174,
                                    outNetwork: 14
                                },
                                {
                                    name: '雨花台区分局',
                                    inNetwork: 123,
                                    outNetwork: 29.1
                                },
                                {
                                    name: '浦口区分局',
                                    inNetwork: 119,
                                    outNetwork: 4
                                },
                                {
                                    name: '江宁区分局',
                                    inNetwork: 106,
                                    outNetwork: 29
                                },
                                {
                                    name: '六合区分局',
                                    inNetwork: 83,
                                    outNetwork: 2
                                },
                                {
                                    name: '溧水区分局',
                                    inNetwork: 70,
                                    outNetwork: 3
                                },
                                {
                                    name: '高淳区分局',
                                    inNetwork: 68,
                                    outNetwork: 0
                                }
                            ]
                        },
                        {
                            title: '部门',
                            result: [
                                {
                                    name: '秦淮区分局',
                                    inNetwork: 250,
                                    outNetwork: 32
                                },
                                {
                                    name: '鼓楼区分局',
                                    inNetwork: 218,
                                    outNetwork: 18
                                },
                                {
                                    name: '建邺区分局',
                                    inNetwork: 209,
                                    outNetwork: 15
                                },
                                {
                                    name: '栖霞区分局',
                                    inNetwork: 174,
                                    outNetwork: 14
                                },
                                {
                                    name: '雨花台区分局',
                                    inNetwork: 123,
                                    outNetwork: 29.1
                                },
                                {
                                    name: '浦口区分局',
                                    inNetwork: 119,
                                    outNetwork: 4
                                },
                                {
                                    name: '江宁区分局',
                                    inNetwork: 106,
                                    outNetwork: 29
                                },
                                {
                                    name: '六合区分局',
                                    inNetwork: 83,
                                    outNetwork: 2
                                },
                                {
                                    name: '溧水区分局',
                                    inNetwork: 70,
                                    outNetwork: 3
                                },
                                {
                                    name: '高淳区分局',
                                    inNetwork: 68,
                                    outNetwork: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    date: '2020',
                    data: [
                        {
                            title: '分校',
                            result: [
                                {
                                    name: '秦淮区分局',
                                    inNetwork: 450.5,
                                    outNetwork: 77
                                },
                                {
                                    name: '鼓楼区分局',
                                    inNetwork: 308,
                                    outNetwork: 18
                                },
                                {
                                    name: '建邺区分局',
                                    inNetwork: 289,
                                    outNetwork: 19
                                },
                                {
                                    name: '栖霞区分局',
                                    inNetwork: 274,
                                    outNetwork: 14
                                },
                                {
                                    name: '雨花台区分局',
                                    inNetwork: 223,
                                    outNetwork: 29.1
                                },
                                {
                                    name: '浦口区分局',
                                    inNetwork: 219,
                                    outNetwork: 14
                                },
                                {
                                    name: '江宁区分局',
                                    inNetwork: 206,
                                    outNetwork: 29
                                },
                                {
                                    name: '六合区分局',
                                    inNetwork: 183,
                                    outNetwork: 12
                                },
                                {
                                    name: '溧水区分局',
                                    inNetwork: 170,
                                    outNetwork: 13
                                },
                                {
                                    name: '高淳区分局',
                                    inNetwork: 168,
                                    outNetwork: 10
                                }
                            ]
                        },
                        {
                            title: '部门',
                            result: [
                                {
                                    name: '秦淮区分局',
                                    inNetwork: 450,
                                    outNetwork: 132
                                },
                                {
                                    name: '鼓楼区分局',
                                    inNetwork: 318,
                                    outNetwork: 118
                                },
                                {
                                    name: '建邺区分局',
                                    inNetwork: 309,
                                    outNetwork: 15
                                },
                                {
                                    name: '栖霞区分局',
                                    inNetwork: 274,
                                    outNetwork: 114
                                },
                                {
                                    name: '雨花台区分局',
                                    inNetwork: 123,
                                    outNetwork: 29.1
                                },
                                {
                                    name: '浦口区分局',
                                    inNetwork: 119,
                                    outNetwork: 4
                                },
                                {
                                    name: '江宁区分局',
                                    inNetwork: 106,
                                    outNetwork: 29
                                },
                                {
                                    name: '六合区分局',
                                    inNetwork: 83,
                                    outNetwork: 2
                                },
                                {
                                    name: '溧水区分局',
                                    inNetwork: 70,
                                    outNetwork: 3
                                },
                                {
                                    name: '高淳区分局',
                                    inNetwork: 68,
                                    outNetwork: 0
                                }
                            ]
                        }
                    ]
                }
            ],
            useList: [
                {
                    title: '学校采用',
                    list: [
                        {
                            title: '习近平亲密接触新媒体释放了什么信号',
                            important: 0,
                        },
                        {
                            title: '新闻舆论工作重在“走心” |以马克思主义新闻观统领新闻舆论',
                            important: 1,
                        },
                        {
                            title: '党和政府的喉舌就是人民的喉舌',
                            important: 0,
                        },
                        {
                            title: '八个字看懂习近平关于新闻舆论工作的重要讲话的内容要义',
                            important: 0,
                        },
                    ]
                },
                {
                    title: '学校通报',
                    list: [
                        {
                            title: '新闻舆论工作重在“走心” |以马克思主义新闻观统领新闻舆论',
                            important: 1,
                        },
                        {
                            title: '习近平亲密接触新媒体释放了什么信号',
                            important: 0,
                        },
                        {
                            title: '党和政府的喉舌就是人民的喉舌',
                            important: 0,
                        },
                        {
                            title: '八个字看懂习近平关于新闻舆论工作的重要讲话的内容要义',
                            important: 0,
                        },
                    ]
                }
            ],
            programList: [
                {name: '程序名称'},
                {name: '程序名称'},
                {name: '程序名称'},
                {name: '程序名称'}
            ]
        }
    },
    components: {
        HomeRightJrzb,
        HomeRightNotice,
        HomeRightSites,
        HomeRightTslm,
        HomeRightVideo,
        HomeRightRank,
        HomeRightUse,
        HomeRightProgram
    }
}
</script>

<style scoped>
    .home-right-container{
        width: 100%;
    }
    .home-right-top{
        background: #F1F2F6;
        padding-bottom: 20px;
        margin-bottom: 30px;
    }
    .home-right-tslm{
        margin-bottom: 30px;
    }
    .home-right-video{
        background: #F1F2F6;
        padding-bottom: 15px;
        margin-bottom: 30px;
    }
    .home-right-rank{
        margin-bottom: 30px;
    }
    .home-right-use{
        margin-bottom: 30px;
    }
</style>
