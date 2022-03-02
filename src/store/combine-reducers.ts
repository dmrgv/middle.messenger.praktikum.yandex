function combineReducers(reducers: { [key: string]: Function }): [Function, object] {
  const reducerKeys = Object.keys(reducers)
  const finalReducers: { [key: string]: Function } = {}
  const initState: { [key: string]: any } = {}
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]
    finalReducers[key] = reducers[key]
    initState[key] = reducers[key]() || {}
  }
  const finalReducerKeys = Object.keys(finalReducers)

  return [
    function combination(state: { [key: string]: any } = {}, action: { [key: string]: any }) {
      const nextState: { [key: string]: any } = {}
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < finalReducerKeys.length; i++) {
        const key = finalReducerKeys[i]
        const reducer = finalReducers[key]
        const previousStateForKey = state[key]
        nextState[key] = reducer(previousStateForKey, action)
      }
      return nextState
    },
    initState,
  ]
}

export default combineReducers
