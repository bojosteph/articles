import React, { Component } from 'react';
import  { connect } from 'react-redux';

import { getComments, deleteComment, setCurrent } from '../../actions/commentActions';  
import CommentsIndex from '../../components/comments/CommentsIndex'; 


class CommentList extends Component {
  
   

  componentDidUpdate(prevProps) {
      if (this.props.article.id !== prevProps.article.id) {
      this.props.getComments(this.props.article.id)
    }
  }

  render() {
    const { article, deleteComment, auth } = this.props
    if(this.props.comments.length) {
    return (
      <div class="col s6">
        <h4>Comments</h4>
        {this.props.comments.map((comment) => {
          return(
            <CommentsIndex key={comment.id} article={article} deleteComment={deleteComment} comment={comment} auth={auth}  setCurrent={setCurrent}/>
          )     
        })}
        
      </div>
    )
      } else {
        return (<div>No comments</div> )
      }
  } 
}



const mapStateToProps = (state) => ({
   comments: state.comments, 
   article: state.article,
   auth: state.auth,   
  
  });



export default connect(mapStateToProps, {getComments, deleteComment, setCurrent})(CommentList);


