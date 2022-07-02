<template>
    <div class="container">
        <h3 class="section-subtitle t-center">
            CASE STUDIES
        </h3>
        <h1 class="section-title t-center">
            Latest Works
        </h1>
        <div class="works">
            <div class="works__item" v-for="work in works" :key="work.id">
                <img :src="work.img" class="works__img" alt="">
                <div class="works-content">
                    <h2 class="works__title">
                        {{ work.title }}
                    </h2>
                    <p class="works__descr">
                        {{ work.descr }}
                    </p>
                    <a :href="work.url" class="works-link main-link">
                        Case Study
                        <img class="works-link__arrow main-link__arrow" :src="arrowIcon" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arrowIcon: require('../assets/images/main-section/arr.svg'),
            works: [
                {
                    id: 1,
                    title: 'Mountains and beyond',
                    descr: ' What level of hiker are you?',
                    img: require('../assets/images/works/1.jpg'),
                    url: '/mntn'
                },
                {
                    id: 1,
                    title: 'Stunning Email',
                    descr: 'Create and launch email campaigns.',
                    img: require('../assets/images/works/3.jpg'),
                    url: ''
                },
                {
                    id: 1,
                    title: ' Premium Web Hosting',
                    descr: 'Blazing fast web hosting!',
                    img: require('../assets/images/works/2.jpg'),
                    url: ''
                },

            ]
        }
    },
}
</script>
<style lang="scss">
@import '../assets/css/mainlayout-css/works.scss';
</style>