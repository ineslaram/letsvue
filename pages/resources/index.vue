<template>
  <div>
    <h1 class="title text-white font-bold p-4 text-blue">
      The best resources to learn Frontend.
    </h1>
    <div class="flex flex-wrap overflow-hidden px-2 ml-4 sm:-mx-3 ml-4">
      <div
        v-for="item in items"
        :key="item.name"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden sm:my-3 sm:px-3 mt-4"
      >
        <ItemCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/resources/ItemCard'
import { ITEMS } from '@/constans/learnFrontend'
export default {
  name: 'FrontendLearn',
  components: {
    ItemCard,
  },
  computed: {
    items() {
      return ITEMS
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 25px;
}
</style>
