import Button from '../../components/button/button'
import validator from '../../modules/validator'
import { LoginPageProps } from './login-model'

const pageData: LoginPageProps = {
  button: new Button({
    className: 'secondary-button',
    id: 'login-sign-up',
    buttonText: 'Нет аккаунта?',
  }).render(),
  loginButtonText: 'Авторизоваться',
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
