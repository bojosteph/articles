import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateArticle } from '../../actions';

class ArticleEdit extends Component {        

  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.article.id
    const title = this.state.title ? this.state.title : this.props.article.title;
    const content = this.state.content ? this.state.content : this.props.article.content;
    const description = this.state.description ? this.state.description : this.props.article.description;
    const image_url = this.state.image_url ? this.state.image_url : this.props.article.image_url
    const article = { id: id, title: title, content: content, description: description, image_url: image_url}
    this.props.updateArticle(article);
  }

  handleCancel = () => {
    this.props.history.push(`/articles/${this.props.article.id}`);
  }

  render() {
    return (
      <div>
       <h1>Edit {this.props.article.title}</h1>
    <div className="row">
      <form  className="col s12" onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
          
          <input type="text" name="title"  defaultValue={this.props.article.title} onChange={this.handleChange}
           className="materialize-textarea"  required />
        </div>
        <div className="input-field col s12">
          
          <textarea  name="content"  className="materialize-textarea" defaultValue={this.props.article.content} onChange={this.handleChange} 
             required />
        </div>
        <div className="input-field col s12">
          
          <input type="text" name="description" defaultValue={this.props.article.description} onChange={this.handleChange}
           className="materialize-textarea"   required />
        </div>
        <div className="input-field col s12">
          
          <input type="text" name="image_url" defaultValue={this.props.article.image_url} onChange={this.handleChange}
          className="materialize-textarea"  required />
        </div>
        <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
      </form>
     </div>
    </div>              
    )
  }
}

const mapStateToProps = (state) => ({ article: state.article });

const mapDispatchToProps = { updateArticle };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);

