<template>
    <ul class="list">
        <li class="list-item" v-for="(item, i) in list" :key="i">
            <img class="list-item-img left" src="../../assets/img/-_09.png" alt="">
            <div class="list-item-text ellipsis-2 left">
                {{ item.title }}
                <img class="list-item-important" v-if="item.important === 1" src="../../assets/img/important2_14.png" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "RightList",
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .list{
        width: 100%;
    }
    .list-item{
        overflow: hidden;
        line-height: 24px;
        cursor: pointer;
        margin-bottom:10px;
    }
    .list-item-img{
        margin-top: 12px;
        margin-right: 6px;
    }
    .list-item-text{
        transition: all 0.4s;
        width: calc(100% - 12px);
    }
    .list-item-date{
        font-size: 15px;
        color: #999;
    }
    .list-item-important{
        margin-bottom:-3px;
    }
    .list li:hover .list-item-text{
        text-decoration: underline;
        color: #081552;
    }
</style>
