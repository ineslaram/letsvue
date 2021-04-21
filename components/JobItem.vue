<template>
  <div class="bg-white shadow-sm p-7 rounded-lg">
    <img
      src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Just a flower"
      class="w-24"
    />
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'JobItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
