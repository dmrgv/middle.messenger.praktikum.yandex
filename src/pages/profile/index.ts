import profileTemplate from './profile-template'
import Block from '../../modules/block'
import './profile.scss'
import pageData from './profile-data'
import Input from '../../components/input/input'
import router from '../../modules/routing'

export default class Profile extends Block {
  constructor() {
    super(profileTemplate, pageData)
  }

  componentDidMount() {
    this._element?.querySelector('.logout')?.addEventListener('click', () => {
      // window.location.href = './index.html'
      router.go('/')
    })
    this._element?.querySelector('.go-back')?.addEventListener('click', () => {
      // window.location.href = './chats.html'
      router.go('/messenger')
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
