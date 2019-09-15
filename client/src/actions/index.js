import axios from 'axios';
import history from '../history';
import {
  RECEIVE_ARTICLES,
  ADD_ARTICLE,
  RECEIVE_ARTICLE,
  REMOVE_ARTICLE,
  UPDATE_ARTICLE,
  REPLACE_ARTICLE,
  GET_ERRORS

} from './types';


// const apiUrl = 'http://localhost:3001/api/articles';





export const getArticles = () => {
  // debugger
  return (dispatch) => {
    return axios({method: 'get', url: '/api/articles', headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken")}})
    .then(response => {
      // debugger
      dispatch({ type: RECEIVE_ARTICLES, payload: response.data})
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
  }
};

export const addArticle = ({ title, content, description, image_url, user_id }) => {
  return (dispatch) => {
    // debugger
    return axios({ method: 'post', url:'/api/articles', headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken") }, data: {title, content, description, image_url, user_id}})
    .then(response => {
      let data = response.data;
      dispatch({
        type: ADD_ARTICLE,
        payload: {id: data.id, title: data.title, content: data.content, description: data.description, image_url: data.image_url}
      })
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
  };
};

export const getArticle = (id) => {
  return (dispatch) => {
    return axios({method: 'get', url: `/api/articles/${id}`, headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken") }})
      .then(response => {
        dispatch({ type: RECEIVE_ARTICLE, payload: response.data });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
  }
}

export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios({ method:'delete', url:`/api/articles/${id}`, headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken")}})
    .then(response => {
      dispatch({ type: REMOVE_ARTICLE, payload: {id}})
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
  }
}

export const updateArticle = (article) => {
  const articleId = article.id;
  return (dispatch) => {
    return axios({ method:'patch', url:`/api/articles/${article.id}`, headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken") }, data: {title: article.title, content: article.content, description: article.description, image_url: article.image_url}})
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_ARTICLE, payload: {id: data.id, title: data.title, content: data.content, description: data.description, image_url: data.image_url}})
        dispatch({ type: REPLACE_ARTICLE, payload: {id: data.id, title: data.title, content: data.content, description: data.description, image_url: data.image_url}})
      })
      .then(() => {
        history.push(`/articles/${articleId}`)
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
  }
}

