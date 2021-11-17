import { chatsTemplate } from './chatsTemplate'
import "../../styles/common.scss"
import './chats.scss'
import { prepareTemplate } from "../../modules/prepareTemplate"

const data = {
    urlToSettings: "./profile.html",
    chats: [
        {name: "Foo"}, {name: "Bar"}, {name: "Baz"}
    ],
    emptyText: "Выберите контакт или группу"
}

prepareTemplate(chatsTemplate, data)
