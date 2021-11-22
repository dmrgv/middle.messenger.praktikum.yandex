import { serverErrorTemplate } from "./server-error-template"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
  title: '500',
  description: 'Что-то пошло не так, уже решаем.',
  buttonText: "Вернутся к чатам",
  url: "./chats.html",
}

prepareTemplate(serverErrorTemplate, data)