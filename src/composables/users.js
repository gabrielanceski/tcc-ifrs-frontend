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

export function getUser(data, document, router, successCallback = () => {}) {
  axios({
    method: 'post',
    url: import.meta.env.VITE_BACKEND_URL + 'user/details',
    headers: {
      Authorization: 'Bearer ' + getToken(router),
    },
    data: {
      document: document
    }
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

class Role {
  constructor(name, label, rolesCanManipulate) {
    this.name = name;
    this.label = label;
    this.rolesCanManipulate = rolesCanManipulate;
  }
}

export const userRoles = {
  "STUDENT": new Role("STUDENT", "Aluno", ["ADMIN", "MASTER"]),
  "PROFESSOR": new Role("PROFESSOR", "Professor", ["ADMIN", "MASTER"]),
  "ADMIN": new Role("ADMIN", "Administrador", ["ADMIN", "MASTER"]),
  "MASTER": new Role("MASTER", "Master", []),
  "COMPANY": new Role("COMPANY", "Empresa", ["ADMIN", "MASTER"]),
}