import { registerTemplate } from "./register-template"
import "../../styles/common.scss"
import "./register.scss"
import { prepareTemplate} from "../../modules/prepare-template"

const data = {
    inputs: [{
        name: "Почта",
        type: "text",
        inputName: "email",
        autocomplete: "email",
    }, {
        name: "Логин",
        type: "text",
        inputName: "login",
    }, {
        name: "Имя",
        type: "text",
        inputName: "first_name",
        autocomplete: "given-name",
    }, {
        name: "Фамилия",
        type: "text",
        inputName: "second_name",
        autocomplete: "family-name",
    }, {
        name: "Телефон",
        type: "text",
        inputName: "phone",
        autocomplete: "tel",
    }, {
        name: "Пароль",
        type: "password",
        inputName: "password",
        autocomplete: "new-password",
    }, {
        name: "Пароль (ещё раз)",
        type: "password",
        inputName: "repeat-password",
        autocomplete: "new-password",
    }]
}

prepareTemplate(registerTemplate, data)
