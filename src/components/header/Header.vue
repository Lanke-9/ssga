<template>
    <div class="header">
        <banner :url-list="urlList"></banner>
        <nav-bar/>
    </div>
</template>

<script>
import Banner from "../banner/Banner";
import NavBar from "../navBar/NavBar";

export default {
    name: "Header",
    data(){
        return {
            urlList: [
                {id: 1, image: '../img/banner_01.png'},
                {id: 2, image: '../img/banner_01.png'},
                {id: 3, image: '../img/banner_01.png'},
                {id: 4, image: '../img/banner_01.png'},
            ]
        }
    },
    components: {
        Banner,
        NavBar
    }
}
</script>

<style scoped>

</style>
