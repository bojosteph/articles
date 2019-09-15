import React from 'react'
import { Link } from 'react-router-dom';

const ArticleShow = ({article, deleteArticle, auth}) => {
  return (
    <div className="col s6">
    <div className="card-panel hoverable">
      <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="responsive-img" src={article.image_url} alt={article.title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{article.id} : {article.title}<i className="material-icons right">more_vert</i></span>
        <p>{article.description}</p>
        {auth.user_id && (article.user_id === auth.user_id &&
        <div className="btn-group">
          <Link to={{ pathname: `/articles/${article.id}/edit`, state: { article: article }}} className="btn btn-info">Edit</Link> 
          <button onClick={() => deleteArticle(article.id)} className="btn btn-danger" type="button">Delete</button> 
          <Link to="/articles" className="btn btn-secondary">Close</Link>
        </div>)}
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
        <p>{article.content}</p>
      </div>
      <hr/>          
    </div>
   </div>
   </div>
  )
}

ArticleShow.defaultProps = {
  image_url: 'https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif'
}

export default ArticleShow
