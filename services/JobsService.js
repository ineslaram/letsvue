import axios from 'axios'

export default {
  async getJobs() {
    try {
      const response = await axios.get(process.env.BASE_URL, {
        headers: { Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY },
      })
      const data = response.data.records.map((item) => {
        return {
          id: item.id,
          ...item.fields,
        }
      })

      data.splice(0, 1)
      return data
    } catch (error) {
      console.error(error)
    }
  },
  async getProject(id) {
    return await axios.get(`${process.env.BASE_URL}${id}`)
  },
}

// export default {
//   async getJobs() {
//     this.items = []
//     await axios
//       .get(API_ROUTES.ALL_PLANTS, {
//         headers: { Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY },
//       })
//       .then((response) => {
//         // load the API response into items for datatable
//         this.items = response.data.records
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   },
// }
