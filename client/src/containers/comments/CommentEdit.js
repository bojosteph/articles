import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComment } from '../../actions/commentActions';

class CommentEdit extends Component {        

  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = (event) => {

    event.preventDefault();
    const id = this.props.comment.id
    const body = this.state.body ? this.state.body : this.props.comment.body
    const comment = { id: id, body: body}
    this.props.updateComment(comment);
  }

  handleCancel = () => {
    this.props.history.push(`/articles/${this.props.article.id}`);
  }

  render() {
    return (
      <div>
       <h1>Edit Comment For {this.props.article.title}</h1>
        <div className="row">
          <form  className="col s12" onSubmit={this.handleSubmit}>           
            <div className="input-field col s12">                
              <input type="text" name="body" defaultValue={this.props.comment.body} onChange={this.handleChange}
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

const mapStateToProps = (state) => ({ comment: state.comment, article: state.article });                                        

const mapDispatchToProps = { updateComment };

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);

