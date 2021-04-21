<template>
  <div
    class="bg-white shadow-sm p-4 rounded-lg flex items-center justify-between mb-4"
  >
    <div class="flex items-center">
      <img
        :src="item.companyImage[0].url"
        :alt="item.companyName"
        class="w-24"
      />
      <div class="ml-4">
        <p>{{ item.companyName }}</p>
        <p class="font-bold text-lg">{{ item.jobTitle }}</p>
        <p>{{ location }}</p>
      </div>
    </div>
    <div class="button">
      <a :href="item.url" target="_black" class="app-button">Aplicar</a>
    </div>
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
  computed: {
    location() {
      return `${this.item.city}, ${this.item.country}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
