<template>
    <div class="home">
        <section class="main-section">
            <Header />
            <Banner />
            <a href="#works" class="main__scroll scroll-to">
                Works
                <img :src="arrowIcon" alt="">
            </a>
        </section>
        <section class="works-section" id="works">
            <Works />
            <a href="#experement" class="works__scroll scroll-to">
                Experement
                <img :src="arrowIcon" alt="">
            </a>
        </section>
        <section class="experement-section" id="experement">
            <Experement />
        </section>
        <Footer />
        <button class="home-btn" :class="{ active: isActive }" @click="scrollTop">
            <img :src="arrowIcon" class="home-btn__arrow" alt="">
        </button>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Header from '@/components/app/Header.vue'
import Works from '@/components/Works.vue'
import Experement from '@/components/Experement.vue'
import Footer from '@/components/app/Footer.vue'

export default {
    components: {
        Banner,
        Header,
        Works,
        Experement,
        Footer
    },
    data() {
        return {
            arrowIcon: require('../assets/images/main-section/arr.svg'),
            isActive: false
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
    mounted() {
        let scrollable = document.documentElement.scrollHeight - window.innerHeight
        window.addEventListener('scroll', () => {
            let scrolled = window.scrollY
            if (Math.ceil(scrolled / scrollable * 100) > 30) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        })
    }
}
</script>
<style lang="scss">
@import '../assets/css/mainlayout-css/main-secion.scss';
</style>