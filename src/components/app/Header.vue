<template>
    <header class="header">
        <router-link to="/" class="logo">
            <img :src="logo" alt="" class="logo__img">
        </router-link>
        <button class="header__btn">
            Contact me
        </button>
    </header>
</template>

<script>
export default {
    data() {
        return {
            logo: require('../../assets/images/header/logo.svg')
        }
    },
}
</script>
<style  lang="scss">
@import '../../assets/css/header.scss';
</style>