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
  async getJob(id) {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/${id}`, {
        headers: { Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY },
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
}
