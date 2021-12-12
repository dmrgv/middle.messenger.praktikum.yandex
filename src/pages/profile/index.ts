import profileTemplate from './profile-template'
import Block from '../../modules/block'
import './profile.scss'
import prepareTemplate from '../../modules/prepare-template'
import { ProfilePageProps as PageProps } from './profile-model'
import pageData from './profile-impl'
import Input from '../../components/input/input'

export default class Profile extends Block {
  constructor(props: PageProps) {
    super(profileTemplate, props)
  }

  componentDidMount() {
    this._element?.querySelector('#profile-logout')?.addEventListener('click', () => {
      window.location.href = './index.html'
    })
    this._element?.querySelector('#profile-back')?.addEventListener('click', () => {
      window.location.href = './chats.html'
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

prepareTemplate(new Profile(pageData))
