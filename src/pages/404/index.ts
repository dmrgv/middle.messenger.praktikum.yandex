import notFoundTemplate from './not-found-template'
import Block from '../../modules/block'
import './not-found.scss'
import prepareTemplate from '../../modules/prepare-template'
import { PageNotFoundProps as PageProps } from './not-found-model'
import pageData from './not-found-data'
import router from '../../modules/routing'

export default class PageNotFound extends Block {
  constructor(props: PageProps) {
    super(notFoundTemplate, props)
  }

  componentDidMount() {
    this._element.querySelector('.go-back')?.addEventListener('click', () => {
      // window.location.href = './chats.html'
      router.go('/messenger')
    })
  }
}

prepareTemplate(new PageNotFound(pageData))
