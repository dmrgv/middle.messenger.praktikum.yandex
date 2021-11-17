import Handlebars from 'handlebars'
import { chatsTemplate } from './chatsTemplate';
import "../../styles/common.scss"
import './chats.css'

const data = {
    urlToSettings: "./settings.html",
    chats: [
        {name: "Foo"}, {name: "Bar"}, {name: "Baz"}
    ],
    emptyText: "Выберите контакт или группу"
}

document.addEventListener('DOMContentLoaded', () => {
    const pageChats = Handlebars.compile(chatsTemplate)(data);

    document.body.innerHTML = pageChats;
})
