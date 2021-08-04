<template>
    <div id="app">
        <Header/>
        <router-view class="app-container"/>
        <foot/>
    </div>
</template>

<script>
import Header from "./components/header/Header";
import Foot from "./components/foot/Foot";

export default {
    name: 'App',
    components: {
        Header,
        Foot
    },
}
</script>

<style>
    @import "assets/css/base.css";

    .app-container{
        min-height: calc(100vh - 538px);
    }
</style>
