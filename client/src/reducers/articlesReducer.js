import { 
  RECEIVE_ARTICLES,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  REPLACE_ARTICLE
} from '../actions/types'

const initialState = { articles: [], user: {} }

export default function articlesReducer(state = initialState, action) {
  switch(action.type) { 
    case RECEIVE_ARTICLES:
      return action.payload;
    case ADD_ARTICLE:
      if (state.user)
      return [action.payload, ...state];
    case REMOVE_ARTICLE:
      return state.filter(article => article.id !== action.payload.id);
    case REPLACE_ARTICLE:
      return state.map((article) => {
        if (article.id === action.payload.id) {
          return {
            ...article,
            title: action.payload.title,
            content: action.payload.content
          }
        } else {
          return article
        }
      })
    default:
      return state;
  }
}