import Button from '../../components/button/button'
import { PageNotFoundProps } from './not-found-model'

const pageData: PageNotFoundProps = {
  title: '404',
  description: 'Такой страницы не существует.',
  button: new Button({
    className: 'link go-back',
    buttonText: 'Вернуться к чатам',
  }).render(),
}

export default pageData
