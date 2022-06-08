<template>
  <transition name="fade">
    <h1 class="text-white center" v-if="tasks.length === 0">No tasks here...</h1>
  </transition>
  <template v-if="tasks.length">
    <h1 class="text-white">Number of active tasks: {{ activeTasksCount }}</h1>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <TaskStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date(task.date).toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="open(task.id)">Open</button>
    </div>
    <button class="btn" @click="clearTasks">Clear the list</button>
  </template>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import TaskStatus from '../components/TaskStatus'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const router = useRouter()

    function clearTasks() {
        store.getters.tasks.splice(0);
        localStorage.removeItem('my-tasks');
    }

    const tasks = computed(() => store.getters.tasks)
    const activeTasksCount = computed(() => store.getters.activeTasksCount)

    return {
      tasks, activeTasksCount, clearTasks,
      open: id => router.push(`/task/${id}`)
    }
  },
  components: {TaskStatus}
}
</script>
<style>
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 2s ease;
  }
</style>