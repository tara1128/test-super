import initialState from './init'
import STATE_1 from '../action-type'
import STATE_2 from '../action-type'


export default (state = initialState, action) => {

  switch (action.type) {
    case STATE_1:
      return "STATE_1..."
      break;
    case STATE_2:
      return "STATE_2..."
      break;
    default:
      return state
  }
  
}
