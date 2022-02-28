import chatsTemplate from './chats-template'
import Block from '../../modules/block'
import './chats.scss'
import pageData from './chats-data'

export default class Chats extends Block {
  constructor() {
    super(chatsTemplate, pageData)
  }
}
