import { notFoundTemplate } from './notFoundTemplate'
import "../../styles/common.scss"
import "./notFound.scss"
import { prepareTemplate } from "../../modules/prepareTemplate"

const data = {
  title: '404',
  description: 'Такой страницы не существует.',
  buttonText: "Вернуться к чатам",
  url: "./chats.html",
}

prepareTemplate(notFoundTemplate, data)