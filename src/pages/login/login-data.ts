import Button from '../../components/button/button'
import validator from '../../modules/validator'
import { LoginPageProps } from './login-model'

const pageData: LoginPageProps = {
  loginButton: new Button({
    className: 'button sign-in',
    buttonText: 'Авторизоваться',
    type: 'submit',
    form: 'login-form',
  }).render(),
  backButton: new Button({
    className: 'link sign-up',
    buttonText: 'Нет аккаунта?',
  }).render(),
  children: [
    {
      name: 'Логин',
      type: 'text',
      inputId: 'login',
      inputName: 'login',
      validator: validator.checkLogin,
      errorText: 'Неверный логин',
    },
    {
      name: 'Пароль',
      type: 'password',
      inputId: 'password',
      inputName: 'password',
      validator: validator.checkPass,
      errorText: 'Неверный пароль',
    },
  ],
}

export default pageData
