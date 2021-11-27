import { chatsTemplate } from './chats-template'
import "./chats.scss"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
    urlToSettings: "./profile.html",
    chats: [
        {name: "Чат 1"}, {name: "Чат 2"}, {name: "Чат 3"}
    ],
    emptyText: "Выберите контакт или группу"
}

prepareTemplate(chatsTemplate, data)
