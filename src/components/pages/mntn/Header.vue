<template>
    <header class="header">
        <img :src="sky" class="header__img sky" alt="">
        <img :src="mountain" class="header__img mountain" alt="">
        <img :src="parson" class="header__img person" alt="">
        <div class="header__gradient"></div>
        <div class="header__gradient_bottom"></div>
        <Navbar />
        <SideBar />
        <Banner />
    </header>
</template>

<script>
import Navbar from './component/Navbar.vue'
import SideBar from './component/SideBar.vue';
import Banner from './component/Banner.vue';
export default {
    data() {
        return {
            parson: require("../../../assets/images/works/mntn/person.png"),
            mountain: require("../../../assets/images/works/mntn/mountain.png"),
            sky: require("../../../assets/images/works/mntn/sky.png"),
        };
    },
    components: { Navbar, SideBar, Banner }
}
</script>