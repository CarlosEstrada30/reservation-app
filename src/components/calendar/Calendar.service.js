import axiosInstance  from '../../providers/axios.provider'
import  handleResponse  from '../../providers'

const api = process.env.REACT_APP_API_URL+'/api/v1/event'

const getEvents = () =>
  axiosInstance.get(api, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }).then(handleResponse)

const update_or_create = (data) =>
  axiosInstance
    .post(api, data, {
      withCredentials: true
    })
    .then(handleResponse)

const del = (token) =>
  axiosInstance.delete(`${api}/${token}`, {
    withCredentials: true
  }).then(handleResponse)


export const calendarService = {
    getEvents,
    update_or_create,
    del
  }