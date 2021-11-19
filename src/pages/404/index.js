import { notFoundTemplate } from './notfound-template'
import "../../styles/common.scss"
import "./notfound.scss"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
  title: '404',
  description: 'Такой страницы не существует.',
  buttonText: "Вернуться к чатам",
  url: "./chats.html",
}

prepareTemplate(notFoundTemplate, data)