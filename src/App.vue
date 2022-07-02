<template>
  <div>
    <component :is='layout'>
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue"
import OthersLayout from "./layouts/OthersLayout.vue"
export default {
  components: {
    MainLayout,
    OthersLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'others') + '-layout'
    }
  },

}
</script>

<style lang="scss">
</style>
