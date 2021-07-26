<template>
    <div class="home-video">
        <right-title>
            <span slot="title-left">视频点播</span>
            <span slot="title-right">更多 ></span>
        </right-title>
        <div class="video">
            <div class="video-img">
                <img class="video-img-i left" src="../../../assets/img/video_03.png" alt="">
                <div class="video-play"><img src="../../../assets/img/play_03.png" alt=""></div>
            </div>
            <div class="video-title ellipsis">{{ video.title }}</div>
        </div>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";

export default {
    name: "HomeRightVideo",
    props: {
        video: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        RightTitle
    }
}
</script>

<style scoped>
    .video{
        padding: 0 15px;
    }
    .video-img{
        position: relative;
        overflow: hidden;
    }
    .video-img-i{
        width: 100%;
    }
    .video-play{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(8, 21, 82, 0.3);
    }
    .video-play img{
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        left: 50%;
        margin-left: -20px;
        margin-top: -20px;
    }
    .video-title{
        margin-top: 15px;
    }
</style>
