import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getArticle, deleteArticle } from '../../actions/index';
import CommentList from '../comments/CommentList';
import CommentAdd from '../comments/CommentAdd';
import ArticleShow from '../../components/articles/ArticleShow';

class ArticleInfo extends Component {
  state = {
    count: 0
  }


  // handleFollow = () => {
  //   this.setState({
  //     follow: !this.state.follow
  //   })
  // }

  increaseCount = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id)
  }

  

  render() {
    // const label = this.state.follow ? "Follow" : "Following";
    const { article, auth, deleteArticle, comment } = this.props;
    return (
    <Fragment>
      <div class="container">
        <ArticleShow article={article} deleteArticle={deleteArticle} auth={auth}/>  
          {/* <button  onClick={this.handleFollow}>{label}</button> {" "} */}
          <button onClick={this.increaseCount}> &hearts;
            Likes:{this.state.count}</button>                 
        <CommentAdd />
        <CommentList article={article}  comment={comment}/>
      </div>         
    </Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth,
  comment: state.comment
});
const mapDispatchToProps = { getArticle, deleteArticle}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);


