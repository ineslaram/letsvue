<template>
  <div>
    <JobDetail :job="job"></JobDetail>
  </div>
</template>

<script>
import JobDetail from '@/components/jobs/JobDetail'
import JobsServices from '@/services/JobsService'
export default {
  name: 'JobeDetailPage',
  components: {
    JobDetail,
  },
  data: () => ({
    job: null,
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const data = await JobsServices.getJob(this.$route.params.id)
      this.job = data.fields
      console.log(this.job)
    },
  },
}
</script>

<style lang="scss" scoped></style>
