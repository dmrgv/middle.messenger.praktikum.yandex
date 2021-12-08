import loginTemplate from './login-template'
import Block from '../../modules/block'
import './login.scss'
import prepareTemplate from '../../modules/prepare-template'
import { LoginPageProps as PageProps } from './login-model'
import pageData from './login-impl'
import Input from '../../components/input/input'

export default class Login extends Block {
  constructor(props: PageProps) {
    super(loginTemplate, props)
  }

  componentDidMount() {
    const form = this._element?.getElementsByTagName('form')[0] as HTMLFormElement

    this.props.children.forEach((childData) => {
      const input = new Input(childData).getContent()
      form.appendChild(input)
    })
  }
}

prepareTemplate(loginTemplate, pageData)
