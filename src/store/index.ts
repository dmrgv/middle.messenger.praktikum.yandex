import userReducer from './user-reducer'
import messagesReducer from './messenger-reducer'
import combineReducers from './combine-reducers'

const [combReducer, initialState] = combineReducers({
  user: userReducer,
  messages: messagesReducer,
})

// type Reducer = (...args: any[]) => { [key: string]: any }

function createStore(reducer: Function, state: { [key: string]: any }) {
  return {
    dispatch: (action: { [key: string]: any }) => {
      // eslint-disable-next-line no-param-reassign
      state = reducer(state, action)
    },
    getState: (path?: string) => {
      if (!path) return state

      return path.split('.').reduce((acc, key) => (acc && key in acc ? acc[key] : null), state)
    },
  }
}

export default createStore(combReducer, initialState)
