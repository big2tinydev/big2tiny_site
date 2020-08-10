<template>
  <q-card>
    <form @submit.prevent="submitForm">
      <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space/>
        <q-btn dense flat round icon="close" v-close-popup/>
      </q-card-section>

      <q-card-section>
        <div class="row q-mb-sm">
          <q-input ref="name" class="col" outlined v-model="taskToSubmit.name" label="Task name"
                   :rules="[val => !!val || 'Field is required']"/>
        </div>

        <div class="row q-mb-sm">
          <q-input v-model="taskToSubmit.dueDate" outlined label="Due date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div

        <div class="row q-mb-sm">

          <q-input outlined v-model="taskToSubmit.dueTime" mask="time" label="Due time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn type="submit" label="Save" color="primary" v-close-popup/>
      </q-card-actions>

    </form>
  </q-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.name.validate()
      console.log(this.$refs.name)
      if (!this.$refs.hasError){
        console.log('SubmitTask')
      }
    },
    submitTask(){
      this.addTask(this.taskToSubmit)
    }
  }
};
</script>
