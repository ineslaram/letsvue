<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
export default {
  components: {
    Navbar,
  },
}
</script>
