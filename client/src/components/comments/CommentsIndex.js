import React from 'react'
// import { Link } from 'react-router-dom';
// import authReducer from '../../reducers/authReducer';

const CommentsIndex = ({article, comment, deleteComment, auth}) => {
  return (
    
    <div>
        <div  className="card-panel grey lighten-5 z-depth-1" id={comment.id}> 
          <div className="row valign-wrapper">
              <div className="col s2">
                  <img 
                    width="48"
                    height="48"
                    src={`https://api.adorable.io/avatars/48/${comment.email.toLowerCase()}@adorable.io.png`}
                    alt="" className="circle responsive-img"/>
                </div>
                <div className="col s10">
                  <p>{comment.email } says {comment.body}</p>           
              </div>     
              {auth.user_id && (comment.user_id === auth.user_id &&
             <div className="btn-group">
                <span className="deleteTaskBtn"  style={deleteBtn} onClick={(e) => deleteComment(article, comment.id)}> <i className="material-icons">delete</i></span>
                {/* <Link to={{ pathname: `/comments/${comment.id}/edit`, state: { comment: comment, article: article}}}><i className="material-icons">edit</i></Link> */}
            </div>)}
          </div>
      </div>
  </div>
  )
}

const deleteBtn = {         
  color: 'red',          
}    

export default CommentsIndex
