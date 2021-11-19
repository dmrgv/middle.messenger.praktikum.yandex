import { registerTemplate } from "./register-template"
import "../../styles/common.scss"
import "./register.scss"
import { prepareTemplate} from "../../modules/prepare-template"

const data = {
    inputs: [{
        name: "Почта",
        type: "text",
        inputName: "email",
    }, {
        name: "Логин",
        type: "text",
        inputName: "login",
    }, {
        name: "Имя",
        type: "text",
        inputName: "first_name",
    }, {
        name: "Фамилия",
        type: "text",
        inputName: "second_name",
    }, {
        name: "Телефон",
        type: "text",
        inputName: "phone",
    }, {
        name: "Пароль",
        type: "password",
        inputName: "password",
    }, {
        name: "Пароль (ещё раз)",
        type: "password",
        inputName: "repeat-password",
    }]
}

prepareTemplate(registerTemplate, data)
