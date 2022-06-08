<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Status</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Deadline date</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Description</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="setStatus('pending')">Take an order</button>
      <button class="btn primary" @click="setStatus('done')">It's done</button>
      <button class="btn danger" @click="setStatus('cancelled')">Cancel</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    There is no task with id = <strong>{{id}}</strong>.
  </h3>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import AppStatus from '../components/TaskStatus'

export default {
  components: {AppStatus},
  props: ['id'],
  setup(props) {
    const store = useStore()

    const id = props.id
    const task = computed(() => store.getters.taskById(id))

    const setStatus = status => {
      const updated = {...task.value, status}
      store.dispatch('changeTask', updated)
    }

    return {
      task,
      id,
      setStatus
    }
  }
}
</script>

<style scoped>

</style>