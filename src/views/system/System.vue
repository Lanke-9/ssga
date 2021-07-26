<template>
    <div class="system">
        system
    </div>
</template>

<script>
export default {
    name: "System",
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 3,
            zh: '学校制度',
            en: 'School System'
        });
    }
}
</script>

<style scoped>

</style>
