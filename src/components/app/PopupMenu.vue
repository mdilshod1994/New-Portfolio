<template>
    <div class="popup-menu">
        <div class="popup-menu__body" :class="{ active: isActive }">
            <div class="popup-menu__content">
                <div class="expirence">
                    <h1 class="expirence__title">
                        My expirence
                    </h1>
                    <ul class="expirence-list">
                        <li class="expirence-item" v-for="exp, index in expirence" :key="exp.id"
                            :style="`--i:${index + 1}`">
                            <img :src="exp.img" class="expirence-item__img" alt="">
                            <div class="expirence-item__content">
                                <h1 class="expirence-item__title">
                                    {{ exp.title }}
                                </h1>
                                <p class="expirence-item__descr">
                                    {{ exp.descr }}
                                </p>
                                <a :href="exp.link" class="expirence-item__link main-link" target="_blank">
                                    Case Study
                                    <img class="expirence-item__arrow main-link__arrow" :src="arrowIcon" alt="">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isActive'],
    data() {
        return {
            arrowIcon: require('../../assets/images/main-section/arr.svg'),
            expirence: [
                {
                    id: 1,
                    title: 'Mulk',
                    descr: 'Building Platform',
                    link: 'http://demo.mulk.tj/',
                    img: require('../../assets/images/expiriance/2.png')
                },
                {
                    id: 2,
                    title: 'Admin dashboard (Mulk)',
                    descr: 'Admin dashboard for CRUD buildings',
                    link: 'http://admin.mulk.tj/',
                    img: require('../../assets/images/expiriance/3.png')
                },
                {
                    id: 3,
                    title: 'ONEBOOK',
                    descr: 'Landing Page',
                    link: 'https://onebook.tj/',
                    img: require('../../assets/images/expiriance/1.png')
                },
                {
                    id: 4,
                    title: 'Maskan Develop',
                    descr: 'Landing Page',
                    link: 'http://maskan.tw1.ru/',
                    img: require('../../assets/images/expiriance/5.png')
                },
                {
                    id: 5,
                    title: 'Maskantower',
                    descr: 'Landing Page',
                    link: 'https://maskantower.tj/',
                    img: require('../../assets/images/expiriance/4.png')
                },
                {
                    id: 6,
                    title: 'F1C',
                    descr: 'Finance Platform',
                    link: 'https://f1c.ru/',
                    img: require('../../assets/images/expiriance/6.png')
                },
                {
                    id: 7,
                    title: 'Zaynab Textile',
                    descr: 'Online store',
                    link: 'https://zaynab.tj/',
                    img: require('../../assets/images/expiriance/7.png')
                },
                {
                    id: 8,
                    title: 'Consulting Group',
                    descr: 'Landing Page',
                    link: 'http://centralasiaconsult.com/',
                    img: require('../../assets/images/expiriance/8.png')
                },
            ]
        }
    },
}
</script>
<style  lang="scss">
@import '../../assets/css/popup-menu.scss';
</style>