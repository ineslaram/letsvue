<template>
  <div v-if="job">
    <div v-html="jobDescription"></div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: {
    job: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    jobDescription() {
      return this.job.fields.jobDescription
    },
  },
}
</script>

<style lang="scss">
.job-desption-title {
  font-weight: bold !important;
  font-size: 20px;
  margin-bottom: 10px;
}

.job-desption-text {
  margin-bottom: 10px;
}
</style>
