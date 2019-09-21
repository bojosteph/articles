import React, { Component, Fragment } from 'react';
import  { connect } from 'react-redux';
import { getArticles} from '../../actions/index';
import ArticleIndex from '../../components/articles/ArticleIndex';
import SearchBox from '../../components/search/SearchBox';

class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      value: ''
    }
  }

  increaseCount = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  onSearchChange = event => {
    this.setState({ value: event.target.value });
  };
  
  componentDidMount(){
    console.log('Child did mount.');
    this.props.getArticles()
  }

  render() {
    const { articles } = this.props
    if(articles.length) {
    return (
      <div >
        <h4 style={h4Style}>ARTICLES</h4>
        <div style={h4Style}>
        <SearchBox onSearchChange={this.onSearchChange} />
        </div>
        {articles.filter(article =>
      article.title.toLowerCase().includes(this.state.value.toLowerCase())
    ).map((article) => {
          return(
          
             <ArticleIndex key={article.id} article={article} /> 
                     
           )     
        })}
        
      </div>
    )
      } else {
        return (<div>No Articles</div> )
      }
  } 
}
 const h4Style = {
   textAlign: 'center'
 }

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps, {getArticles})(ArticleList);
