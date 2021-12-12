import serverErrorTemplate from './server-error-template'
import './server-error.scss'
import prepareTemplate from '../../modules/prepare-template'
import { PageServerErrorProps as PageProps } from './server-error-model'
import pageData from './server-error-impl'
import Block from '../../modules/block'

export default class PageServerError extends Block {
  constructor(props: PageProps) {
    super(serverErrorTemplate, props)
  }

  componentDidMount() {
    this._element.querySelector('#go-back-500')?.addEventListener('click', () => {
      window.location.href = './chats.html'
    })
  }
}

prepareTemplate(new PageServerError(pageData))
