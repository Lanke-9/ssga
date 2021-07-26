<template>
    <div class="address-book">
        address-book
    </div>
</template>

<script>
export default {
    name: "AddressBook",
    created() {
        this.$store.commit('changeCurrent', {
            currentBanner: 6,
            zh: '学校通讯录',
            en: 'School Address Book'
        });
    }
}
</script>

<style scoped>

</style>
