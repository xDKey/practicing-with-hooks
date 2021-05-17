export type Action = {
  type: 'increment' | 'decrement'
  payload?: any
}

export const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
