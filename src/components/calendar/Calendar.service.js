import axiosInstance  from '../../providers/axios.provider'
import  handleResponse  from '../../providers'

console.log(process.env.REACT_APP_API_URL)
const api = process.env.REACT_APP_API_URL+'/event'

const getEvents = () =>
  axiosInstance.get(api).then(handleResponse)

const update_or_create = (data) =>
  axiosInstance
    .post(api, data)
    .then(handleResponse)

const del = (token) =>
  axiosInstance.delete(`${api}/${token}`).then(handleResponse)


export const calendarService = {
    getEvents,
    update_or_create,
    del
  }