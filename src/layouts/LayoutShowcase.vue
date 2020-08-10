<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-grand-hotel bg-white text-grey-10" bordered>
      <q-toolbar>
        <q-btn
          :key="nav.label" :to="nav.to" clickable exact v-for="nav in navs"
          :icon="nav.icon"
          size="18px"
          flat
          round
          dense
        />
        <q-separator spaced vertical inset/>

        <q-toolbar-title class="text-center">
          Showcase
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

<!--    <q-footer bordered>-->
<!--      <q-tabs active-bg-color="primary" active-color="white" class="bg-white text-grey-10" indicator-color="transparent">-->
<!--        <q-route-tab :key="nav.label" v-for="nav in navs" :to="nav.to" :icon="nav.icon" :label="nav.label"/>-->
<!--      </q-tabs>-->
<!--    </q-footer>-->

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

    <q-page-container class="bg-grey-1">
      <router-view/>
    </q-page-container>


  </q-layout>
</template>

<script>


export default {
  name: 'ShowcaseLayout',
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Home',
          icon: 'eva-home-outline',
          to: '/'
        },
        {
          label: 'Showcase',
          icon: 'eva-image-outline',
          to: '/showcase'
        },

        {
          label: 'Camera',
          icon: 'eva-camera-outline',
          to: '/camera'
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
    color: white !important
.q-icon
    font-size: 30px
.q-toolbar__title
  font-size: 30px
</style>
