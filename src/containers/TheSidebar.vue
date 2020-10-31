<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <div class="c-sidebar-brand-full" >
        <img src="https://raw.githubusercontent.com/DeevMaks/medsputnik/gh-pages/logo.png">
        МедСпутник
      </div>
      <div class="c-sidebar-brand-minimized">
        <img src="https://raw.githubusercontent.com/DeevMaks/medsputnik/gh-pages/logo.png">
      </div>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
export default {
  name: 'TheSidebar',
  computed: {
    nav () {
      return this.$store.getters.navigation
    },
    show () {
      return this.$store.state.sidebarShow
    },
    minimize () {
      return this.$store.state.sidebarMinimize
    }
  }
}
</script>
