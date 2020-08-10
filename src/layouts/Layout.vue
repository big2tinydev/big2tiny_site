<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Big2Tiny
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab :key="nav.label" v-for="nav in navs" :to="nav.to" :icon="nav.icon" :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      :width="200"
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <!--Start-->
        <q-item :key="nav.label" :to="nav.to" clickable exact v-for="nav in navs">
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
        <!--end-->

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>


  </q-layout>
</template>

<script>


export default {
  name: 'MyLayout',
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          label: 'Todo',
          icon: 'list',
          to: '/todo'
        },
        {
          label: 'Showcase',
          icon: 'camera',
          to: '/showcase'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
      ]
    }
  }
}
</script>

<style lang="sass">
@media screen and (min-width: 768px)
  .q-footer
    display: none
.q-drawer
  .q-router-link--active
    color: white!important
</style>
