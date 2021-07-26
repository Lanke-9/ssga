<template>
    <div class="school-archives">
        school-archives
    </div>
</template>

<script>
export default {
    name: "SchoolArchives",
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 4,
            zh: '学校档案',
            en: 'School Archives'
        });
    }
}
</script>

<style scoped>

</style>
