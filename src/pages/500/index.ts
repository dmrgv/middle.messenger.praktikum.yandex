import serverErrorTemplate from './server-error-template'
import './server-error.scss'
import prepareTemplate from '../../modules/prepare-template'
import { PageServerErrorProps as PageProps } from './server-error-model'
import pageData from './server-error-data'
import Block from '../../modules/block'
import router from '../../modules/routing'

export default class PageServerError extends Block {
  constructor(props: PageProps) {
    super(serverErrorTemplate, props)
  }

  componentDidMount() {
    this._element.querySelector('.go-back')?.addEventListener('click', () => {
      // window.location.href = './chats.html'
      router.go('/messenger')
    })
  }
}

prepareTemplate(new PageServerError(pageData))
