import { RECEIVE_COMMENT, UPDATE_COMMENT} from '../actions/types';

const initialState = {     
  article: {},
  comment: {}
};

export default function commentReducer ( state = initialState, action) {
  switch(action.type) {
    case RECEIVE_COMMENT:
      return action.payload
    case UPDATE_COMMENT:
      return {
        id: action.id,
        body: action.payload.body
      }
    default:
      return state;
  }
}