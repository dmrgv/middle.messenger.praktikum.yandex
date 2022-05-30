import serverErrorTemplate from './server-error-template'
import './server-error.scss'
// import prepareTemplate from '../../modules/prepare-template'
import { PageServerErrorProps as PageProps } from './server-error-model'
import pageData from './server-error-data'
import Block from '../../modules/block'
import router from '../../modules/routing'

export default class PageServerError extends Block {
  constructor(props: PageProps) {
    super('div', props)
  }

  componentDidMount() {
    this._element.querySelector('.go-back')?.addEventListener('click', () => {
      // window.location.href = './chats.html'
      router.go('/messenger')
    })
    // this.setProps({
    //   events: {
    //     click: (event: Event) => {
    //       if ((event.target as HTMLElement).id === 'server-error-link') {
    //         router.go('/messenger')
    //       }
    //     },
    //   },
    // })
  }

  render(): DocumentFragment {
    return this.compile(serverErrorTemplate, pageData)
  }
}

// prepareTemplate(new PageServerError(pageData))
