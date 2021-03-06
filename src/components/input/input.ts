import Block from '../../modules/block'
import inputTemplate from './input-template'

interface InputProps {
  className?: string
  name: string
  inputId: string
  inputName: string
  type: string
  value?: string
  validator?: string
  errorText?: string
  inputErrorClassName: string
}

export default class Input extends Block {
  constructor(props: object) {
    super(inputTemplate, props as InputProps)
  }

  componentDidMount() {
    const input = this._element.querySelector('input') as HTMLInputElement

    input.addEventListener('blur', (e: FocusEvent) => {
      const { value, classList } = e.target as HTMLInputElement
      if (!this.props.validator.test(value)) {
        classList.add('error')
        this.setProps({
          error: value ? this.props.errorText : 'Поле не должно быть пустым',
          value,
          className: classList.toString(),
        })
      } else {
        classList.remove('error')
        this.setProps({
          error: '',
          value,
          className: classList.toString(),
        })
      }
    })
  }
}
