import Handlebars from 'handlebars'
import { loginTemplate } from "./loginTemplate"
import "./login.scss"

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

document.addEventListener('DOMContentLoaded', () => {
    const pageLogin = Handlebars.compile(loginTemplate)(data);

    document.body.innerHTML = pageLogin;
})
