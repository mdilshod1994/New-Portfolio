<template>
  <div class="sidebar" :class="{ active: isActive || ifNotScrolled }" >
    <div class="sidebar-wrapper">
      <div class="sidebar-name">
        <router-link to="" class="sidebar-name__link">
          Mirzoev Dilshod
        </router-link>
      </div>
      <div class="sidebar-btn" @click="$emit('popupMenu')" :class="{ active: isActive }">
        <span class="sidebar-btn__line"></span>
        <span class="sidebar-btn__line"></span>
        <span class="sidebar-btn__line"></span>
      </div>
      <ul class="sidebar-social__list">
        <li class="sidebar-social__item" v-for="link, index in links" :key="index">
          <router-link :to="link.url" class="sidebar-social__link">
            <img :src="link.iconsId" alt="">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['isActive'],
  data() {
    return {
      ifNotScrolled: true,
      links: [
        {
          url: '',
          iconsId: require('../../assets/images/icons/fb.svg')
        },
        {
          url: '',
          iconsId: require('../../assets/images/icons/insta.svg')
        },
        {
          url: '',
          iconsId: require('../../assets/images/icons/tel.svg')
        },
        {
          url: '',
          iconsId: require('../../assets/images/icons/you.svg')
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const topPage = window.pageYOffset
      topPage < 90 ? this.ifNotScrolled = true : this.ifNotScrolled = false
    })
  }
}
</script>
<style  lang="scss">
@import '../../assets/css/sidebar.scss';
</style>
