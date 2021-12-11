const checkEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
const checkPhone = /^\d[\d() -]{4,14}\d$/
const checkLogin = /^([A-Za-zА-Яа-я0-9_\-.]){2,10}$/
const checkText = /^([A-Za-zА-Яа-я]){2,10}$/
const checkPass = /1qaz2wsx/

export default {
  checkEmail,
  checkPhone,
  checkLogin,
  checkText,
  checkPass,
}
