import Block from '../../modules/block'
import inputTemplate from './input-template'

interface InputProps {
  className?: string
  name: string
  id?: string
  inputName: string
  type: string
  value?: string
  validation?: string
  validationText?: string
  inputErrorClassName: string
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(inputTemplate, props)
  }

  componentDidMount() {
    const input = this._element.querySelector('input') as HTMLInputElement

    input.addEventListener('blur', (e: FocusEvent) => {
      const { value } = e.target as HTMLInputElement
      if (!this.props.validation.test(value)) {
        this.setProps({
          error: value ? this.props.validationText : 'Поле не должно быть пустым',
          value,
          inputErrorClassName: 'error-validation',
        })
      } else {
        this.setProps({
          error: '',
          value,
          inputErrorClassName: '',
        })
      }
    })
  }
}
