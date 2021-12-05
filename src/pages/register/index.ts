import { registerTemplate } from "./register-template"
import "./register.scss"
import { prepareTemplate} from "../../modules/prepare-template"

const data = {
    inputs: [{
        name: "Почта",
        type: "text",
        inputId: "email",
        inputName: "email",
        autocomplete: "email",
    }, {
        name: "Логин",
        type: "text",
        inputId: "login",
        inputName: "login",
    }, {
        name: "Имя",
        type: "text",
        inputId: "first_name",
        inputName: "first_name",
        autocomplete: "given-name",
    }, {
        name: "Фамилия",
        type: "text",
        inputId: "second_name",
        inputName: "second_name",
        autocomplete: "family-name",
    }, {
        name: "Телефон",
        type: "text",
        inputId: "phone",
        inputName: "phone",
        autocomplete: "tel",
    }, {
        name: "Пароль",
        type: "password",
        inputId: "password",
        inputName: "password",
        autocomplete: "new-password",
    }, {
        name: "Пароль (ещё раз)",
        type: "password",
        inputId: "repeat-password",
        inputName: "repeat-password",
        autocomplete: "new-password",
    }]
}

prepareTemplate(registerTemplate, data)
