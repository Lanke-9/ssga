<template>
    <div class="program">
        <right-title>
            <span slot="title-left">常用程序</span>
        </right-title>
        <ul class="program-list">
            <li class="program-list-item" v-for="(item, i) in programList" :key="i">
                <span class="program-list-name left">{{ item.name }}</span>
                <span class="program-list-to right">》</span>
            </li>
        </ul>
    </div>
</template>

<script>
import RightTitle from "../../../components/title/RightTitle";

export default {
    name: "HomeRightProgram",
    props: {
        programList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        RightTitle
    }
}
</script>

<style scoped>
    .program-list{
        padding:0 10px;
    }
    .program-list-item{
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.2);
        background: #fff;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all 0.4s;
    }
    .program-list-to{
        color: #081552;
    }
    .program-list-item:hover{
        background: #eee;
    }
</style>
