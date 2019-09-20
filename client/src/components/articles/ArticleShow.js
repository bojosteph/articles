import React from 'react'
import { Link } from 'react-router-dom';

const ArticleShow = ({article, deleteArticle, auth}) => {
  return (
       <div class="grid-example col s12">

        <h5 class="center-align" >{article.title}</h5>
        <div class="col s12 center-align">
        <img className="responsive-img " 
           src={article.image_url} alt={article.title} />
      </div>
        <p  style={{
          whiteSpace: 'pre-line'
        }} >{article.content}</p>
     
       
     
        {auth.user_id && (article.user_id === auth.user_id &&
        <div className="btn-group">
          <Link to={{ pathname: `/articles/${article.id}/edit`, state: { article: article }}} className="btn btn-info">Edit</Link> 
          <button onClick={() => deleteArticle(article.id)} className="btn btn-danger" type="button">Delete</button> 
          <Link to="/articles" className="btn btn-secondary">Close</Link>
        </div>)}
      </div>
       
  
  
   
   
  )
}

const imageStyle = {
    maxWidth: '100%'
    
}

ArticleShow.defaultProps = {
  image_url: 'https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif'
}

export default ArticleShow
