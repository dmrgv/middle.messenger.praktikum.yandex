import { loginTemplate } from "./login-template"
import "../../styles/common.scss"
import "./login.scss"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
    inputs: [{
        name: "Логин",
        type: "text",
        inputName: "login",
    }, {
        name: "Пароль",
        type: "password",
        inputName: "password",
    }]
}

prepareTemplate(loginTemplate, data)
