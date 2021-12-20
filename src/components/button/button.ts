import Block from '../../modules/block'
import buttonTemplate from './button-template'

interface ButtonProps {
  className?: string
  buttonText: string
  type?: string
  form?: string
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(buttonTemplate, props)
  }
}
