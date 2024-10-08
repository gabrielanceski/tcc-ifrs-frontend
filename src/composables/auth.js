import axios from "axios"
import { nextTick } from "vue";

export function login(form, router, errorCallback = () => {}, successCallback = () => {}) {
  axios.post(import.meta.env.VITE_BACKEND_URL + 'auth/token', form.value)
    .then(res => {
      setItemWithExpiry('token', res.data.token, res.data.expires_at)
      successCallback();
      router.push({ name: 'home' })
    })
    .catch(err => {
      errorCallback(err);
    })
}

export function logout(router, callback = () => {}) {
  localStorage.removeItem('token')
  nextTick(() => {
    callback();
    router.push({ name: 'login' })
  })
}

export function getToken(router) {
  const tokenStr = localStorage.getItem('token')
  if (!tokenStr) {
    router.push({ name: 'login' })
    return null
  }
  const token = JSON.parse(tokenStr)
  const now = new Date()
  if (now.getTime() > token.expiry) {
    localStorage.removeItem('token')
    router.push({ name: 'login' })
    return null
  }
  // if (token.expiry - now.getTime() < 1000) {
  //   refreshToken(token.value)
  // }
  return token.value
}

export function hasToken() {
  const tokenStr = localStorage.getItem('token')
  if (tokenStr === null) {
    return false
  }
  return true
}

function setItemWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}