import loginTemplate from './login-template'
import Block from '../../modules/block'
import './login.scss'
// import prepareTemplate from '../../modules/prepare-template'
import render from '../../modules/render-dom'
import { LoginPageProps as PageProps } from './login-model'
import pageData from './login-impl'
import Input from '../../components/input/input'

export default class Login extends Block {
  constructor(props: PageProps) {
    super(loginTemplate, props)
  }

  componentDidMount() {
    const form = this._element?.getElementsByTagName('form')[0] as HTMLFormElement

    this.props.children.forEach((child: object) => {
      const input = new Input(child).getContent()
      const target = form.querySelector('.inputs-block')
      if (target) target.appendChild(input)
    })
  }
}

// prepareTemplate(loginTemplate, pageData)
render(new Login(pageData))
