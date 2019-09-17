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
    const { article, auth, deleteArticle } = this.props;
    return (
    <Fragment>
      <ArticleShow article={article} deleteArticle={deleteArticle} auth={auth}/>  
      <button onClick={this.increaseCount}> &hearts;
Likes: 
 {this.state.count}</button>
        <div className="col s6">

              <CommentAdd />
              <CommentList />
        </div>         
    </Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth
});
const mapDispatchToProps = { getArticle, deleteArticle}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);


