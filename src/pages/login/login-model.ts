export interface LoginPageProps {
  children: {
    name: string
    type: string
    inputId: string
    inputName: string
    id: string
    validator: RegExp
    errorText: string
  }[]
  button: string
  loginButtonText?: string
}
