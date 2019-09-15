import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getArticle, deleteArticle } from '../../actions/index';
import CommentList from '../comments/CommentList';
import CommentAdd from '../comments/CommentAdd';
import ArticleShow from '../../components/articles/ArticleShow';

class ArticleInfo extends Component {
  
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id)
  }

  

  render() {
    const { article, auth, deleteArticle } = this.props;
    return (
    <Fragment>
      <ArticleShow article={article} deleteArticle={deleteArticle} auth={auth}/>   
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


