const checkEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
const checkPhone = /^(([+]79?\d{9})|([78]?9\d{9}))$/
const checkLogin = /^([A-Za-zА-Яа-я0-9_\-.]){2,10}$/
const checkText = /^([A-Za-zА-Яа-я]){2,10}$/
const checkPass = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export default {
  checkEmail,
  checkPhone,
  checkLogin,
  checkText,
  checkPass,
}
