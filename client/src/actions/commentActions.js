import axios from 'axios';
import history from '../history';
import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  REPLACE_COMMENT, 
  CLEAR_CURRENT

} from './types';


// const apiUrl = 'http://localhost:3001/api/comments';
const token = "Bearer " + localStorage.getItem("jwtToken")




export const getComments = (articleId) => {
  return (dispatch) => {
    return axios({method: 'get', url: `/api/articles/${articleId}/comments`, headers: {'Authorization': token }})
    .then(response => {
      dispatch({ type: RECEIVE_COMMENTS, payload: response.data})
    })
    .catch(error => { throw(error)})
  }
};

export const addComment = ({  body, article_id, user_id, email }) => {     
  return (dispatch) => {
    return axios({ method: 'post', url:`/api/comments`, headers: {'Authorization': token }, data: {body, user_id, article_id}})
    .then(response => {
      let data = response.data;
      dispatch({
        type: ADD_COMMENT,
        payload: {id: data.id, body: data.body, article_id: article_id, user_id: user_id, email: email}
      })
    })
    .then(() => {
      //  debugger
      history.push(`/articles/${article_id}`)
    })
    .catch(error => { throw(error)});
  }
}

export const getComment = (id) => {
  return (dispatch) => {
    return axios({method: 'get', url: `/api/articles/${id}`, headers: {'Authorization': token }})
      .then(response => {
        dispatch({ type: RECEIVE_COMMENT, payload: response.data })
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const deleteComment = (article, id) => {
  let articleId = article.id;
  return (dispatch) => {
    return axios({ method:'delete', url:`/api/comments/${id}`, headers: {'Authorization': token}})
    .then(response => {
      dispatch({ type: REMOVE_COMMENT, payload: {id}})
    })
    .then(() => {
      history.push(`/articles/${articleId}`)
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const updateComment = (comment, article) => {
  debugger
  const commentId = comment.id;
  debugger
  return (dispatch) => {
    return axios({ method:'patch', url:`/api/comments/${commentId}`, headers: {'Authorization': token }, data: {body: comment.body}})
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_COMMENT, payload: {id: data.id, body: data.body}})
        dispatch({ type: REPLACE_COMMENT, payload: {id: data.id, body: data.body}})
      })    
      .then(() => {
        history.push(`/articles/${article.id}`)
      })   
      .catch(error => { throw(error)});
  }
}


export const clearCurrent = () => {
  return {
      type: CLEAR_CURRENT
  }
}
