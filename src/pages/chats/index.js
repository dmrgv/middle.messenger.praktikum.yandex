import { chatsTemplate } from './chats-template'
import "../../styles/common.scss"
import './chats.scss'
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
    urlToSettings: "./profile.html",
    chats: [
        {name: "Foo"}, {name: "Bar"}, {name: "Baz"}
    ],
    emptyText: "Выберите контакт или группу"
}

prepareTemplate(chatsTemplate, data)
