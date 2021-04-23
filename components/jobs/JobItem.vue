<template>
  <div
    class="bg-white shadow-sm p-4 rounded-lg flex flex-wrap items-center justify-between mb-4"
  >
    <div class="flex items-center mb-2">
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
    <JobCategories :categories="item.categories" class="mb-2"></JobCategories>
    <div class="items-right mx-2">
      <p>{{ item.created }}</p>
    </div>

    <div class="button m-auto md:m-0">
      <a :href="item.url" target="_black" class="app-button">Aplicar</a>
    </div>
  </div>
</template>

<script>
import JobCategories from '@/components/jobs/JobCategories'
export default {
  name: 'JobItem',
  components: {
    JobCategories,
  },
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
