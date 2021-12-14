import Button from '../../components/button/button'
import { PageServerErrorProps } from './server-error-model'

const pageData: PageServerErrorProps = {
  title: '500',
  description: 'Что-то пошло не так, уже решаем.',
  button: new Button({
    className: 'link go-back',
    buttonText: 'Вернуться к чатам',
  }).render(),
}

export default pageData
