<template>
  <div class="category flex flex-wrap">
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="category-wrapper flex-wrap"
    >
      <div class="category-container mr-2 mb-2 md:mb-0 flex flex-wrap">
        <p class="category-text">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobsCategories',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.category {
  &-container {
    border-radius: 10px;
    background-color: #7d75e9;
    padding: 2px 8px;
    color: white;
  }
  &-text {
    font-size: 12px;
  }
}
</style>
