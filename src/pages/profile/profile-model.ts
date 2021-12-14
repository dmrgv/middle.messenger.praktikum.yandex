export interface ProfilePageProps {
  children: {
    name: string
    type: string
    inputId: string
    inputName: string
    autocomplete?: string
    validator: RegExp
    errorText: string
  }[]
  logoutButton: string
  backButton: string
  submitButton: string
}
