<template>
  <div class="card-container rounded overflow-hidden shadow-lg bg-white">
    <a :href="item.link" target="_blank">
      <img class="w-full" :src="item.source" alt="Sunset in the mountains" />
    </a>
    <div class="py-4 px-2">
      <div class="font-bold text-lg mb-2 text-white">
        <a :href="item.link" target="_blank"
          ><h1 class="hover:text-blue">
            {{ item.title }}
          </h1></a
        >
      </div>
      <p class="text-white font-thin text-sm">
        {{ item.description }}
      </p>
      <span v-for="price in item.price" :key="price" class="text-blue">
        {{ price }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  max-width: 250px;
}
</style>
