<template>
    <div class="experements">
        <h3 class="section-subtitle t-center">
            EXPERIMENTS FOR Fun
        </h3>
        <h1 class="section-title t-center">
            EXPERIMENTS
        </h1>
        <div class="experements__list">
            <div class="experements__item" v-for="experement, index in experements" :key="experement.id">
                <span class="experements__number"> 0{{ index + 1 }} </span>
                <h1 class="experements__title t-center">
                    {{ experement.title }}
                </h1>
                <p class="experements__subtitle t-center">
                    {{ experement.subtitle }}
                </p>
                <span class="experements__text">(no plugins & libraries)</span>
                <router-link :to="experement.url" class="experements-link main-link">
                    See more
                    <img class="experements-link__arrow main-link__arrow" :src="arrowIcon" alt="">
                </router-link>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            arrowIcon: require('../assets/images/main-section/arr.svg'),
            experements: [
                {
                    id: 1,
                    title: 'Form Validation',
                    subtitle: 'Have fun to see Validations',
                    url: ''
                },
                {
                    id: 2,
                    title: 'Toaster',
                    subtitle: 'Have fun to see Toasters',
                    url: ''
                },
                {
                    id: 3,
                    title: 'Pagination',
                    subtitle: 'Have fun to see Paginations',
                    url: ''
                },
                {
                    id: 4,
                    title: 'Slider',
                    subtitle: 'Have fun to see Sliders',
                    url: '/sliders'
                },
                {
                    id: 5,
                    title: 'Random Things',
                    subtitle: 'Have fun to see some of my experements',
                    url: ''
                },
            ]
        }
    },
}
</script>
<style lang="scss">
@import '../assets/css/mainlayout-css/experement.scss';
</style>