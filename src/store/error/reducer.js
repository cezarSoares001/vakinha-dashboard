import { RECEIVE_API_ERROR } from './actions';

const defaultState = {
  code: 0,
  message: '',
}

export default function errors(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_API_ERROR:
      return action.message;
    default:
      return state;
  }
}
