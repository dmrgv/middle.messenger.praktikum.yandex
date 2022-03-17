import authTemplate from './register-template'
import Block from '../../modules/block'
import './register.scss'
import pageData from './register-data'
import Input from '../../components/input/input'
import router from '../../modules/routing'

export default class Register extends Block {
  constructor() {
    super(authTemplate, pageData)
  }

  componentDidMount() {
    this._element?.querySelector('.sign-in')?.addEventListener('click', () => {
      router.go('/')
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
        // window.location.href = './chats.html'
        router.go('/messenger')
      }
    })
  }
}
