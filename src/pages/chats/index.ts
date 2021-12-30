import chatsTemplate from './chats-template'
import Block from '../../modules/block'
import './chats.scss'
import { ChatsPageProps as PageProps } from './chats-model'
import prepareTemplate from '../../modules/prepare-template'
import pageData from './chats-data'

export default class Chats extends Block {
  constructor(props: PageProps) {
    super(chatsTemplate, props)
  }
}

prepareTemplate(new Chats(pageData))
