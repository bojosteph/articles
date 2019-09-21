import { 
  RECEIVE_ARTICLES,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  REPLACE_ARTICLE,
  SEARCH_DATA
} from '../actions/types'

const _ = require('lodash')

const initialState = { 
  articles: [],
  user: {} ,
  filtered: []
  }

export default function articlesReducer(state = initialState, action) {      
  switch(action.type) { 
    case RECEIVE_ARTICLES:
      return action.payload;
    case ADD_ARTICLE:
      return [...state, action.payload]          
    case REMOVE_ARTICLE:
      return state.filter(article => article.id !== action.payload.id);
    case REPLACE_ARTICLE:
      return state.map((article) => {
        if (article.id === action.payload.id) {
          return {
            ...article,
            title: action.payload.title,
            content: action.payload.content,
            description: action.payload.description,
            image_url: action.payload.image_url
          }
        } else {
          return article
        }
      })
    case SEARCH_DATA:
      const filtered = _.filter(state.articles, (o) => _.toLower(o.article).includes(_.toLower(action.payload)))
      return {...state, filtered}
    default:
      return state;
  }
}