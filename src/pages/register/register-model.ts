export interface RegisterPageProps {
  children: {
    name: string
    type: string
    inputId: string
    inputName: string
    autocomplete?: string
    validator: RegExp
    errorText: string
  }[]
  button: string
  submitButtonText?: string
}
