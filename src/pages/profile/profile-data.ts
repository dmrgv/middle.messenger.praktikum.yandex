import validator from '../../modules/validator'
import { ProfilePageProps } from './profile-model'
import Button from '../../components/button/button'

const pageData: ProfilePageProps = {
  logoutButton: new Button({
    id: 'profile-logout',
    buttonText: 'Выйти',
    className: 'link red',
  }).render(),
  backButton: new Button({
    id: 'profile-back',
    buttonText: 'Назад',
    className: 'link',
  }).render(),
  submitButtonText: 'Сохранить',
  children: [
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
      name: 'Имя',
      type: 'text',
      inputId: 'first_name',
      inputName: 'first_name',
      autocomplete: 'given-name',
      validator: validator.checkText,
      errorText: 'Некорректное имя',
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
      name: 'Почта',
      type: 'text',
      inputId: 'email',
      inputName: 'email',
      autocomplete: 'email',
      validator: validator.checkEmail,
      errorText: 'Некорректный email',
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
  ],
}

export default pageData
