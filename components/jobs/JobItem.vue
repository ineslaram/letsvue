<template>
  <div
    class="bg-white shadow-sm p-4 rounded-lg lg:flex items-center flex-wrap justify-between mb-4"
  >
    <a
      class="cursor-pointer lg:w-4/5 flex items-center justify-between flex-wrap"
      @click="goToJobDetail"
    >
      <div class="flex items-center mb-2 mr-4">
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
      <JobCategories :categories="item.categories"></JobCategories>
      <div class="mx-2">
        <p>{{ item.created }}</p>
      </div>
    </a>
    <div class="button m-auto md:m-0 sm:w1/5 text-center">
      <a
        :href="item.url"
        target="_black"
        class="app-button hover:bg-secondary-darker"
      >
        Aplicar
      </a>
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
  methods: {
    goToJobDetail() {
      this.$router.push(`job-detail/${this.item.id}`)
    },
  },
}
</script>
