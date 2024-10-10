import axios from "axios"
import { getToken } from '@/composables/auth.js'

export function getCompanies(data, router) {
  axios({
    method: 'get',
    url: import.meta.env.VITE_BACKEND_URL + 'company',
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

export function createCompany(form, router, processing = null, errorCallback = () => {}, successCallback = () => {}) {
  if (processing) {
    processing.value = true;
  }
  axios({
    method: 'post',
    url: import.meta.env.VITE_BACKEND_URL + 'company',
    data: form.value,
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
  }).then(() => {
    if (processing) {
      processing.value = false;
    }
    successCallback();
    router.push({ name: 'companies' });
  }).catch((err) => {
    if (processing) {
      processing.value = false;
    }
    console.log(err);
    errorCallback(err.response.data);
  })
}

export function getCompany(data, id, router, successCallback = () => {}) {
  axios({
    method: 'get',
    url: import.meta.env.VITE_BACKEND_URL + 'company/' + id,
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

export function editCompany(form, id, router, processing = null, errorCallback = () => {}, successCallback = () => {}) {
  if (processing) {
    processing.value = true;
  }
  delete form.value.document
  axios({
    method: 'patch',
    url: import.meta.env.VITE_BACKEND_URL + 'company/' + id,
    data: form.value,
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
  }).then(() => {
    if (processing) {
      processing.value = false;
    }
    successCallback();
    router.push({ name: 'companies' });
  }).catch((err) => {
    if (processing) {
      processing.value = false;
    }
    console.log(err);
    errorCallback(err.response.data);
  })
}