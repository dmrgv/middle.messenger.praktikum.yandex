import { registerTemplate } from "./registerTemplate"
import "../../styles/common.scss"
import "./register.scss"
import { prepareTemplate} from "../../modules/prepareTemplate"

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
    }, {
        name: "Повторите пароль",
        type: "password",
        inputName: "repeat-password",
    }]
}

prepareTemplate(registerTemplate, data)
