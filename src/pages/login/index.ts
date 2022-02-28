import authTemplate from './auth-template'
import Block from '../../modules/block'
import './login.scss'
import prepareTemplate from '../../modules/prepare-template'
import { LoginPageProps as PageProps } from './login-model'
import pageData from './login-data'
import Input from '../../components/input/input'
import router from '../../modules/routing'

export default class Login extends Block {
  constructor(props: PageProps) {
    super(authTemplate, props)
  }

  componentDidMount() {
    this._element?.querySelector('.sign-up')?.addEventListener('click', () => {
      // window.location.href = './register.html'
      router.go('')
    })

    const form = this._element?.getElementsByTagName('form')[0] as HTMLFormElement
    const inputs: string[] = []

    this.props.children.forEach((child: object) => {
      const input = new Input(child).getContent()
      inputs.push((child as { inputId: string }).inputId)
      const target = form.querySelector('.inputs-block')
      if (target) target.appendChild(input)
    })

    form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault()
      const { elements } = e.target as { elements?: { namedItem: Function } }
      inputs.forEach((inputId) => {
        console.log(`${inputId}: ${elements?.namedItem(inputId).value}`)
      })
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

prepareTemplate(new Login(pageData))
