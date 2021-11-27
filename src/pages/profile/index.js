import { profileTemplate } from './profile-template'
import "./profile.scss"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
  inputs: [{
    name: "Имя",
    type: "text",
    inputId: "first_name",
    inputName: "first_name",
  }, {
    name: "Фамилия",
    type: "text",
    inputId: "second_name",
    inputName: "second_name",
  }, {
    name: "Логин",
    type: "text",
    inputId: "login",
    inputName: "login",
  }, {
    name: "Почта",
    type: "text",
    inputId: "email",
    inputName: "email",
  }, {
    name: "Телефон",
    type: "text",
    inputId: "phone",
    inputName: "phone",
  }, {
    name: "Пароль",
    type: "password",
    inputId: "password",
    inputName: "password",
  }],
}

prepareTemplate(profileTemplate, data)
