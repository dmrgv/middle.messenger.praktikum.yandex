import { profileTemplate } from './profile-template'
import "../../styles/common.scss"
import './profile.scss'
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
  inputs: [{
    name: "Имя",
    type: "text",
    inputName: "first_name",
  }, {
    name: "Фамилия",
    type: "text",
    inputName: "second_name",
  }, {
    name: "Логин",
    type: "text",
    inputName: "login",
  }, {
    name: "Почта",
    type: "text",
    inputName: "email",
  }, {
    name: "Телефон",
    type: "text",
    inputName: "phone",
  }, {
    name: "Пароль",
    type: "password",
    inputName: "password",
  }],
}

prepareTemplate(profileTemplate, data)
