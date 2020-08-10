import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    'id1': {
      name: 'Something',
      completed: false,
      dueDate: '2020-08-22',
      dueTime: '18:30',
    },
    'id2': {
      name: 'Something 2',
      completed: false,
      dueDate: '2020-08-22',
      dueTime: '18:30',

    },
    'id3': {
      name: 'Something 3',
      completed: false,
      dueDate: '2020-08-22',
      dueTime: '18:30',

    },
  }
}

const mutations = {
  updateTask(state, payload){
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload){
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({commit}, payload){
    commit('updateTask', payload)
  },
  deleteTask({commit}, id){
    commit('deleteTask', id)
  },
  addTask({commit}, task){
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
