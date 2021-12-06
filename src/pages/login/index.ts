import loginTemplate from './login-template'
import './login.scss'
import prepareTemplate from '../../modules/prepare-template'

const data = {
  inputs: [
    {
      name: 'Логин',
      type: 'text',
      inputId: 'login',
      inputName: 'login',
    },
    {
      name: 'Пароль',
      type: 'password',
      inputId: 'password',
      inputName: 'password',
    },
  ],
}

prepareTemplate(loginTemplate, data)
