import { FETCH_GREETING_SUCCESS } from './actions';

const initialState = {
  greeting: 'Hello, World!'
};

export function greetingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload.greeting
      };
    default:
      return state;
  }
}
