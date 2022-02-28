import Store from './store'

const store = new Store()

const getUserState = () => {
  const state: Record<string, any> = store.getState()
  const user: Record<string, any> = state.user ?? {}

  return {
    ...user,
  }
}

const addUserData = (add: {}) => {
  const user = getUserState()

  store.set('user', {
    ...user,
    ...add,
  })
}

export { addUserData }
