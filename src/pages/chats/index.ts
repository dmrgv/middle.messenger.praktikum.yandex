import chatsTemplate from './chats-template'
import Block from '../../modules/block'
import './chats.scss'
// import prepareTemplate from '../../modules/prepare-template'
import render from '../../modules/render-dom'
import pageData from './chats-impl'

// prepareTemplate(chatsTemplate, data)
render(new Block(chatsTemplate, pageData))
