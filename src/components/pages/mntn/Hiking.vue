<template>
    <div class="mntn">
        <Header />
        <Content />
        <Footer />
    </div>
</template>
<script>
import Content from './Content.vue'
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components: { Content, Header, Footer },
    data() {
        return {};
    },
}
</script>

<style lang="scss">
@import '../../../assets/css/otherlayout-css/pages/mntn.scss';
</style>