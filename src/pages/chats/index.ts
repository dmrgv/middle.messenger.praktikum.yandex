import chatsTemplate from './chats-template'
import Block from '../../modules/block'
import './chats.scss'
import prepareTemplate from '../../modules/prepare-template'
import pageData from './chats-impl'

prepareTemplate(new Block(chatsTemplate, pageData))
