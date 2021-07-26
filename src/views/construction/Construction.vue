<template>
    <div class="construction">
        construction
    </div>
</template>

<script>
export default {
    name: "Construction",
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 1,
            zh: '学校建设',
            en: 'School Construction'
        });
    }
}
</script>

<style scoped>

</style>
