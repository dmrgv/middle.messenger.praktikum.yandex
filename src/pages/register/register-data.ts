import Button from '../../components/button/button'
import validator from '../../modules/validator'
import { RegisterPageProps } from './register-model'

const pageData: RegisterPageProps = {
  signinButton: new Button({
    buttonText: 'Войти',
    className: 'link sign-in',
  }).render(),
  submitButton: new Button({
    className: 'button sign-up',
    buttonText: 'Зарегистрироваться',
    type: 'submit',
    form: 'register-form',
  }).render(),
  children: [
    {
      name: 'Почта',
      type: 'text',
      inputId: 'email',
      inputName: 'email',
      autocomplete: 'email',
      validator: validator.checkEmail,
      errorText: 'Некорректный email',
    },
    {
      name: 'Логин',
      type: 'text',
      inputId: 'login',
      inputName: 'login',
      validator: validator.checkLogin,
      errorText: 'Некорректный логин',
    },
    {
      name: 'Имя',
      type: 'text',
      inputId: 'first_name',
      inputName: 'first_name',
      autocomplete: 'given-name',
      validator: validator.checkText,
      errorText: 'Некорректное имя',
    },
    {
      name: 'Фамилия',
      type: 'text',
      inputId: 'second_name',
      inputName: 'second_name',
      autocomplete: 'family-name',
      validator: validator.checkText,
      errorText: 'Некорректная фамилия',
    },
    {
      name: 'Телефон',
      type: 'text',
      inputId: 'phone',
      inputName: 'phone',
      autocomplete: 'tel',
      validator: validator.checkPhone,
      errorText: 'Некорректный номер телефона',
    },
    {
      name: 'Пароль',
      type: 'password',
      inputId: 'password',
      inputName: 'password',
      autocomplete: 'new-password',
      validator: validator.checkPass,
      errorText: 'Недопустимый пароль',
    },
    {
      name: 'Пароль (ещё раз)',
      type: 'password',
      inputId: 'repeat-password',
      inputName: 'repeat-password',
      autocomplete: 'new-password',
      validator: validator.checkPass,
      errorText: 'Недопустимый пароль',
    },
  ],
}

export default pageData
