import authTemplate from './auth-template'
import Block from '../../modules/block'
import './login.scss'
// import prepareTemplate from '../../modules/prepare-template'
import render from '../../modules/render-dom'
import { LoginPageProps as PageProps } from './login-model'
import pageData from './login-impl'
import Input from '../../components/input/input'

export default class Login extends Block {
  constructor(props: PageProps) {
    super(authTemplate, props)
  }

  componentDidMount() {
    this._element?.querySelector('#login-sign-up')?.addEventListener('click', () => {
      window.location.href = './register.html'
    })

    const form = this._element?.getElementsByTagName('form')[0] as HTMLFormElement

    this.props.children.forEach((child: object) => {
      const input = new Input(child).getContent()
      const target = form.querySelector('.inputs-block')
      if (target) target.appendChild(input)
    })

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let error = false

      const newChildren = this.props.children.map((childData: { inputId: string; validator: RegExp; errorText: string }) => {
        const elem = this._element?.querySelector(`#${childData.inputId}`) as HTMLInputElement
        if (!childData.validator.test(elem.value)) {
          error = true
          return {
            ...childData,
            error: elem.value ? childData.errorText : 'Поле не должно быть пустым',
            inputErrorClassName: 'error',
          }
        }
        return childData
      })

      if (error) {
        this.setProps({ children: newChildren })
      } else {
        window.location.href = './chats.html'
      }
    })
  }
}

// prepareTemplate(loginTemplate, pageData)
render(new Login(pageData))
