<template>
    <div class="popup-menu">
        <div class="popup-menu__body">
            <span v-for="q, i in 8" :key="i" :style="`--i:${i}`" :class="{ active: isActive }"
                class="popup-menu__animationbg"></span>
            <div class="popup-menu__content">
                <ul class="popup-menu__list">
                    <li class="popup-menu__item" v-for="item, index in links" :key="index">
                        <a :href="item.link" class="popup-menu__link">
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
                <div class="get-in-touch">
                    <h1 class="get-in-touch__title">
                        Get In Touch
                    </h1>
                    <form class="get-in-touch__form">
                        <div class="input-wrapper">
                            <div class="input-container">
                                <input type="text" required id="username" @blur="blurMethod($event)"
                                    class="get-in-touch__input" autocomplete="off">
                                <label for="username" class="get-in-touch__label">Your Name</label>
                            </div>
                            <div class="input-container">
                                <input type="email" required id="useremail" @blur="blurMethod($event)"
                                    class="get-in-touch__input">
                                <label for="useremail" class="get-in-touch__label">Your Email</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input type="text" required id="subject" @blur="blurMethod($event)" class="get-in-touch__input">
                            <label for="subject" class="get-in-touch__label">Your Subject</label>
                        </div>
                        <div class="input-container input-container_textarea">
                            <textarea name="" id="message" required class="get-in-touch__textarea" @blur="blurMethod($event)"
                                rows="5" />
                            <label for="message" class="get-in-touch__label">Your Message</label>
                        </div>
                        <button class="get-in-touch__btn"> Send Message </button>
                    </form>
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
            links: [
                {
                    id: 1,
                    title: 'About',
                    link: '/about',
                },
                {
                    id: 2,
                    title: 'Resume',
                    link: '/resume',
                },
                {
                    id: 3,
                    title: 'Portfolio',
                    link: '/portfolio',
                },
                {
                    id: 4,
                    title: 'Contact',
                    link: '/contact',
                },
            ]
        }
    },
    methods: {
        blurMethod(e) {
            if (e.target.value !== '') {
                e.target.nextElementSibling.classList.add('filled')
            } else {
                e.target.nextElementSibling.classList.remove('filled')
            }
        }
    }
}
</script>
<style  lang="scss">
@import '../../assets/css/popup-menu.scss';
</style>