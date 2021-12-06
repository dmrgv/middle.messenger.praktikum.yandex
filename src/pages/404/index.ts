import notFoundTemplate from './not-found-template'
import './not-found.scss'
import prepareTemplate from '../../modules/prepare-template'

const data = {
  title: '404',
  description: 'Такой страницы не существует.',
  buttonText: 'Вернуться к чатам',
  url: './chats.html',
}

prepareTemplate(notFoundTemplate, data)
