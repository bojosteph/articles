import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ArticleIndex = ({article}) => {   

  const [ count,  increaseCount ] = useState(0); 
  return (    
            <div className="col s12 m6 l3">
              <div className="card-panel hoverable">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={article.image_url} alt=""/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
                    <p><Link to={`/articles/${article.id}`}>{article.title}</Link></p>
                    <button onClick={() => increaseCount( count + 1 )}> &hearts;
                    Likes:{count}</button>   
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
                    <p>{article.description}</p>
                  </div>
              </div> 
            </div>
        </div>                           
  )
}

export default ArticleIndex