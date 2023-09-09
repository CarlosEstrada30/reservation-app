import axiosInstance  from '../../providers/axios.provider'
import  handleResponse  from '../../providers'

const api = process.env.REACT_APP_API_URL+'/api/v1/event'
// const api = 'https://3d37-190-148-128-190.ngrok-free.app/api/v1/event'

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