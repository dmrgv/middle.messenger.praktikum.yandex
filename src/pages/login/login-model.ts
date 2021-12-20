export interface LoginPageProps {
  children: {
    name: string
    type: string
    inputId: string
    inputName: string
    validator: RegExp
    errorText: string
  }[]
  loginButton: string
  backButton: string
}
