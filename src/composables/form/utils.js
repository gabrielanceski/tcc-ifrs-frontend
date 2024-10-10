export function useFillForm(data, form) {
  for (let key in form.value) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      form.value[key] = data[key]
    }
  }
}
