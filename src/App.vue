<template>
  <TheHeader></TheHeader>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>

</style>
