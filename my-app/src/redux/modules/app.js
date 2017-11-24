const initialState = {}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      name: action.name,
      age: state.age
    }
    case 'SHOW_DIALOG':
    return {
      status: true
    }
    case 'CLOSE_DIALOG':
    return {
      status: false
    }
  default:
    return state;
  }
}