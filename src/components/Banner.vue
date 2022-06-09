<template>
    <div class="banner">
        <div class="banner-wrapper">
            <div class="banner__content">
                <h1 class="banner__title">
                    Mirzoev Dilshod
                </h1>
                <p class="banner__subtitle">
                    Interactive Front-end Developer
                </p>
                <button class="banner__btn">
                    About me
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style  lang="scss">
@import '../assets/css/mainlayout-css/banner.scss';

.fade-banner-leave-active,
.fade-banner-enter-active {
    transition: all 0.5s ease-in-out;

}


.fade-banner-enter-active {
    transition-delay: 0.3s;
}


.fade-banner-leave-active {
    position: absolute;
}

.fade-banner-enter-from {
    opacity: 0;
}

.fade-banner-enter-to {
    opacity: 1;
}

.fade-banner-leave-from {
    opacity: 1;
}

.fade-banner-leave-to {
    opacity: 0;
}
</style>