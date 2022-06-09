<template>
    <div class="popup-menu">
        <div class="popup-menu__body" :class="{ active: isActive }">

        </div>
    </div>
</template>
<script>
export default {
    props: ['isActive']
}
</script>
<style  lang="scss">
@import '../../assets/css/popup-menu.scss';
</style>