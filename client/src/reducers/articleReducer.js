import { RECEIVE_ARTICLE, UPDATE_ARTICLE} from '../actions/types';

const initialState = {     
  user: {},
  article: {}
};

export default function articleReducer ( state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ARTICLE:
      return action.payload
    case UPDATE_ARTICLE:
      return {
        id: action.id,
        title: action.payload.title,
        content: action.payload.content,
        description: action.payload.description,
        image_url: action.payload.image_url
      }
    default:
      return state;
  }
}