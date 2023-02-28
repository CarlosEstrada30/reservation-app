import axiosInstance  from '../../providers/axios.provider'
import  handleResponse  from '../../providers'

const api = 'http://127.0.0.1:5000/api/v1/event'

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