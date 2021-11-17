import { loginTemplate } from "./loginTemplate"
import "../../styles/common.scss"
import "./login.scss"
import { prepareTemplate } from "../../modules/prepareTemplate";

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
