<template>
  <q-page class="constrain q-pa-md" padding>
    <div class="row q-col-gutter-lg">
      <div class="col-8">
        <q-card class="card-post q-mb-md" flat bordered v-for="post in posts" :key="post.id">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">Lee Laing</q-item-label>
              <q-item-label caption>
                {{ post.location }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator/>

          <q-img
            :src="post.imageUrl"
          />

          <q-card-section>
            <div class="">{{ post.caption }}</div>
            <div class="text-grey text-caption">{{ post.date | niceDate }}</div>
          </q-card-section>

        </q-card>

      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
              <q-avatar size="60px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
          <q-item-section>
              <q-item-label class="text-bold">Lee Laing</q-item-label>
              <q-item-label caption>
                Charlotte, MI, United States
              </q-item-label>
            </q-item-section>
        </q-item>
      </div>
    </div>

  </q-page>
</template>

<script>
import {date} from 'quasar'

export default {
  name: 'ShowcaseHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          date: 1597079178910,
          location: 'Charlotte, MI, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 1597079178913,
          location: 'Charlotte, MI, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          date: 1597079178923,
          location: 'Charlotte, MI, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
      ]
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMMM D @ h:mm A')
    }
  }


}
</script>
<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>
