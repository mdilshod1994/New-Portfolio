<template>
    <div class="main-layout">
        <SideBarVue @popupMenu="popupMenu" :isActive="isActive" />
        <PopupMenu :class="{ active: isActive }" :isActive="isActive" />
        <router-view />
    </div>
</template>

<script>
import SideBarVue from "@/components/app/SideBar.vue"
import PopupMenu from "@/components/app/PopupMenu.vue"
export default {
    components: {
        SideBarVue,
        PopupMenu
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {

    },
    methods: {
        popupMenu() {
            this.isActive = !this.isActive
        }
    },

}
</script>
<style lang="scss">
</style>