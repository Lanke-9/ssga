<template>
    <div class="foot">
        <div class="foot-wrapper auto-1200">
            <div class="foot-data">
                <span>信息报送</span>
                <span>今日访问量 : 32324人次</span>
                <span>网站访问总量 : 8121283432人</span>
                <span>全天信息发布 : 87条</span>
                <span>信息总量 : 18387条</span>
            </div>
            <div class="foot-logo"><img src="../../assets/img/logo2_03.png" alt=""></div>
            <div class="foot-desc">
                <div class="foot-desc-tel">
                    <span>主办单位 : 南京市警察学院</span>
                    <span>联系电话 : 18263663672</span>
                </div>
                <div class="foot-desc-all">Copyright 3201000053 Allright Reserved 南京警察学院版权所有</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Foot"
}
</script>

<style scoped>
    .foot{
        width: 100%;
        min-width: 1200px;
        background: #081552;
        padding: 30px 0 20px;
    }
    .foot-data{
        overflow: hidden;
    }
    .foot-data span{
        float: left;
        padding: 0 40px;
        color: #fff;
    }
    .foot-logo{
        text-align: center;
        margin: 20px 0;
    }
    .foot-desc{
        color: #fff;
        opacity: 0.6;
        font-size: 14px;
        text-align: center;
        font-weight: 300;
    }
    .foot-desc-tel{
        margin-bottom: 10px;
    }
    .foot-desc-tel span:first-child{
        margin-right: 20px;
    }
</style>
