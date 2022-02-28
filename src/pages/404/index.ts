import notFoundTemplate from './not-found-template'
import Block from '../../modules/block'
import './not-found.scss'
import pageData from './not-found-data'
import router from '../../modules/routing'

export default class PageNotFound extends Block {
  constructor() {
    super(notFoundTemplate, pageData)
  }

  componentDidMount() {
    this._element.querySelector('.go-back')?.addEventListener('click', () => {
      // window.location.href = './chats.html'
      router.go('/messenger')
    })
  }
}
