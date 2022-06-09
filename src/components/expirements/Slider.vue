<template>
    <div class="banner__slides">
        <transition-group v-for="img, index in images" :key="index" name="fade-banner">
            <div class="banner__slide" v-if="index === currIndex" :class="{ active: currIndex === nextCurr }">
                <img :src="img.img" alt="" class="banner__img" :key="index">
                <div class="banner__slide-wrap">
                    <div class="banner__img_bg" :style="{ background: `url(${img.img})` }" v-if="index === currIndex">
                        <div class="slide__inner">
                            <div class="slide-content">
                                <h3 class="slide__title">
                                    {{ img.title }}
                                </h3>
                                <p class="slide__subtitle">
                                    {{ img.subtitle }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
        <div class="slide__btns">
            <button class="slide__btn slide__btn_prev" @click="prevSlide">
                prev
            </button>
            <button class="slide__btn slide__btn_next" @click="nextSlide">
                next
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderComponent',
    data() {
        return {
            currIndex: 0,
            nextCurr: null,
            images: [
                {
                    img: require('../../assets/images/banner/slider/1.webp'),
                    title: 'Greenland, North America',
                    subtitle: 'Tree, snow, cloud',
                },
                {
                    img: require('../../assets/images/banner/slider/2.webp'),
                    title: 'Alaska, North America',
                    subtitle: 'Tree, fog',
                },
                {
                    img: require('../../assets/images/banner/slider/3.webp'),
                    title: 'Alaska, North America',
                    subtitle: 'Tree, fog, river',
                },
            ]
        }
    },
    methods: {
        nextSlide(index) {
            this.currIndex++
            this.nextCurr = this.currIndex

        },
        prevSlide() {
            this.currIndex--
        }
    }

}
</script>

<style lang="scss">
@import '../../assets/css/expirements/slider.scss';
</style>