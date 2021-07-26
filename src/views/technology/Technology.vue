<template>
    <div class="technology">
        technology
    </div>
</template>

<script>
export default {
    name: "Technology",
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 2,
            zh: '学校科技',
            en: 'School Technology'
        });
    }
}
</script>

<style scoped>

</style>
