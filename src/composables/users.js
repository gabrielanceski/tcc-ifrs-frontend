import axios from "axios"
import { getToken } from '@/composables/auth.js'

export function getUsers(data, router) {
  axios({
    method: 'get',
    url: import.meta.env.VITE_BACKEND_URL + 'user',
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
  }).then(res => {
    data.value =  res.data
  }).catch(err => {
    console.log(err)
    data.value = [];
  })
}

export function createUser(form, router, processing = null, errorCallback = () => {}, successCallback = () => {}) {
  if (processing) {
    processing.value = true;
  }
  axios({
    method: 'post',
    url: import.meta.env.VITE_BACKEND_URL + 'user',
    data: form.value,
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
  }).then(() => {
    if (processing) {
      processing.value = false;
    }
    successCallback();
    router.push({ name: 'users' });
  }).catch((err) => {
    if (processing) {
      processing.value = false;
    }
    console.log(err);
    errorCallback(err.response.data);
  })
}

export function getUser(data, id, router, successCallback = () => {}) {
  axios({
    method: 'get',
    url: import.meta.env.VITE_BACKEND_URL + 'user/' + id,
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
  }).then(res => {
    data.value =  res.data
    successCallback(res.data);
  }).catch(err => {
    console.log(err)
    data.value = {};
  })
}

export function editUser(form, id, router, processing = null, errorCallback = () => {}, successCallback = () => {}) {
  if (processing) {
    processing.value = true;
  }
  delete form.value.document
  axios({
    method: 'patch',
    url: import.meta.env.VITE_BACKEND_URL + 'user/' + id,
    data: form.value,
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
  }).then(() => {
    if (processing) {
      processing.value = false;
    }
    successCallback();
    router.push({ name: 'users' });
  }).catch((err) => {
    if (processing) {
      processing.value = false;
    }
    console.log(err);
    errorCallback(err.response.data);
  })
}