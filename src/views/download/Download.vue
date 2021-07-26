<template>
    <div class="download">
        download
    </div>
</template>

<script>
export default {
    name: "Download",
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 5,
            zh: '资料下载',
            en: 'Download'
        });
    }
}
</script>

<style scoped>

</style>
