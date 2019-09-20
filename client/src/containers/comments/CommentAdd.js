import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';
import TextArea from '../../components/forms/TextArea';
import Button from '../../components/buttons/Button';

class CommentAdd extends Component {
  constructor() {
    super()
    this.state = {
       body: '',
       article_id: '', 
       user_id: '', 
       email: '',        
       errors: {}

       };     
  }

  handleChange = (event) => {        
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let article = {body: this.state.body, article_id: this.props.article.id, user_id: this.props.auth.user_id, email: this.props.auth.user.email}
    if(this.handleValidation()) {
       this.props.addComment(article)   
    } else {
      alert("Form has errors")
    }         
  }

  handleValidation() {
    let body = this.state.body;
    let  errors = {};
    let formIsValid = true;

    if(body === '') {
      formIsValid = false;
      errors["body"] = "Cannot be empty";
    }
    this.setState({errors: errors});
    return formIsValid;
  }



  handleClearForm = (event) => {
    event.preventDefault();
    this.setState({
      body: '',
      article_id: '',
      user_id: '',
      email: ''
    })
  }

 
  render() {
   
    return (
      <div class="col s6">
        <h4>Add Comment </h4>
        <form onSubmit={this.handleSubmit}> 
        <TextArea 
           title={"Body"}
           rows={10}
           value={this.state.body}
           name={"body"}
           handleChange={this.handleChange}
           placeholder={"Enter Comment"}
           required={true}
          />
           <span style={{color: "red"}}>{this.state.errors["body"]}</span>
        </form>
        <Button
          action={this.handleSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          
          />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
          />{" "}
      </div>
     
    );
  }
}


const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth
});

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);



