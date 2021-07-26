<template>
    <div class="nav-bar-item" :class="{active: isActive}">
        <div @click="linkTo()"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: "NavBarItem",
    props: {
        link: {
            type: String,
            default: ''
        }
    },
    methods: {
        linkTo() {
            this.$router.push(this.link);
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.link) !== -1;
        }
    }
}
</script>

<style scoped>
    .nav-bar-item{
        text-align:center;
        width: calc(1199px / 7);
        color:#fff;
        line-height:45px;
        transition: all 0.4s;
        cursor: pointer;
        float: left;
    }
    .nav-bar-item:hover{
        background: #444E7C;
    }
    .nav-bar-item.active{
        background: #444E7C;
        font-weight: bold;
    }
</style>
