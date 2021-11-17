import { serverErrorTemplate } from "./serverErrorTemplate"
import "../../styles/common.scss"
import "./serverError.scss"
import { prepareTemplate } from "../../modules/prepareTemplate"

const data = {
  title: '500',
  description: 'Что-то пошло не так, уже решаем.',
  buttonText: "Вернутся к чатам",
  url: "./chats.html",
}

prepareTemplate(serverErrorTemplate, data)