<template>
    <footer class="footer">
        <div class="footer__content">
            <router-link to="/" class="footer__link">
                <img :src="logo" class="footer__logo" alt="">
            </router-link>
            <div class="footer-socials">
                <a href="" class="footer-social__link">
                    Codepen
                </a>
                <a href="" class="footer-social__link">
                    Bitbucket
                </a>
                <a href="" class="footer-social__link">
                    Github
                </a>
            </div>
            <p>
                © {{ currYear }} Mirzoev Dilshod
            </p>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            logo: require('../../assets/images/header/logo.svg'),
            currYear: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/css/footer.scss';
</style>