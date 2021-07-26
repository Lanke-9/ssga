<template>
    <ul class="list">
        <li v-if="!(isTop && i === 0)" class="list-item" v-for="(item, i) in list" :key="i">
            <img class="list-item-img left" src="../../assets/img/-_09.png" alt="">
            <div class="list-item-text ellipsis left" :class="textWidth">
                {{item.title}}
                <img class="list-item-important" v-if="item.important === 1" src="../../assets/img/important2_14.png" alt="">
            </div>
            <div v-if="showTime" class="list-item-date right">{{item.date.substring(5)}}</div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "List",
    props: {
        list: Array,
        default() {
            return [];
        },
        showTime: {
            type: Boolean,
            default: false
        },
        isTop: {
            type: Boolean,
            default: false
        },
        textSize: {
            type: String,
            default: ''
        }
    },
    computed: {
        textWidth(){
            return this.textSize === '420' ? 'size-420' : 'size-100';
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
        line-height: 35px;
        cursor: pointer;
    }
    .list-item-img{
        margin-top: 16px;
        margin-right: 6px;
    }
    .list-item-text{
        transition: all 0.4s;
    }
    .list-item-text.size-420{
        width: 420px;
    }
    .list-item-text.size-100{
        width: 95%;
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
