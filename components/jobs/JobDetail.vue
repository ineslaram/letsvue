<template>
  <div v-if="job">
    <div class="header">
      <div class="header-info">
        <div class="image-container">
          <img :src="job.companyImage[0].url" class="company-image" alt="" />
        </div>
        <p class="header-info__title font-bold">{{ job.jobTitle }}</p>
        <p class="header-info__company">at {{ job.companyName }}</p>
      </div>
    </div>
    <main class="content flex gap-x-4 px-8 py-20">
      <div class="first-column w-2/3 mt-2">
        <div class="short-description bg-white rounded mb-5 px-8 py-4 flex">
          <div class="w-1/2">
            <p>{{ jobLocation }}</p>
            <p>{{ created }}</p>
            <p>{{ remote }}</p>
          </div>
          <div class="w-1/2">
            <p>{{ job.salary }}</p>
            <p>{{ jobExperience }}</p>
            <p>{{ job.contractType }}</p>
          </div>
        </div>
        <div class="description-container p-8 py-20 md:p-20 bg-white rounded">
          <div v-html="jobDescription"></div>
        </div>
      </div>
      <div
        class="second-column w-1/3 mt-2 bg-white flex justify-center items-center"
      >
        <div class="button m-auto md:m-0 sm:w1/5 text-center">
          <a
            :href="job.url"
            target="_black"
            class="app-button hover:bg-secondary-darker"
          >
            Aplicar
          </a>
        </div>
      </div>
    </main>
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
      return this.job.jobDescription
    },
    jobLocation() {
      return `${this.job.city}, ${this.job.country}`
    },
    created() {
      return `Publicado hace ${this.job.created}`
    },
    remote() {
      return this.job.remote === 'Remoto' ? 'Remoto' : 'Presencial'
    },
    jobExperience() {
      return this.job.experience
        ? `Experiencia de ${this.job.experience} años`
        : null
    },
  },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 200px;
  background-color: $primary;
  position: relative;

  .image-container {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    padding: 2px;
    position: absolute;
    top: 150px;
    left: 20px;
  }

  .company-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &-info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    &__title {
      color: white;
      font-size: 30px;
    }
    &__company {
      color: white;
    }
  }
}

.job-description-title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.job-description-text {
  margin-bottom: 10px;
}

.second-column {
  height: 100px;
}
</style>
