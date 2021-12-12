import notFoundTemplate from './not-found-template'
import Block from '../../modules/block'
import './not-found.scss'
import prepareTemplate from '../../modules/prepare-template'
import { PageNotFoundProps as PageProps } from './not-found-model'
import pageData from './not-found-impl'

export default class PageNotFound extends Block {
  constructor(props: PageProps) {
    super(notFoundTemplate, props)
  }

  componentDidMount() {
    this._element.querySelector('#go-back-404')?.addEventListener('click', () => {
      window.location.href = './chats.html'
    })
  }
}

prepareTemplate(new PageNotFound(pageData))
