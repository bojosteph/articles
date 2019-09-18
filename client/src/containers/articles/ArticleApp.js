
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../stylesheets/App.css';
// import Home from './Home';

import ArticleList from './ArticleList';
import ArticleInfo from './ArticleInfo';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import CommentEdit from '../comments/CommentEdit';
import Welcome from "../../components/welcome/Welcome";
import {Router, Route, Switch} from 'react-router-dom'
import Navbar from '../../components/layout/Navbar';
import history from '../../history';



class ArticleApp extends Component {
  
  render() {
    return (
      <Router history={history}>
        <div className="row">
          <Navbar />   
          <Main />
        </div>
      </Router>
    );
  }
}

const Main = () => (
  <Switch>    
    <Route exact path="/welcome" component={Welcome}/>
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/addArticles" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
    <Route exact path="/comments/:id/edit" component={CommentEdit} /> 
  </Switch>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(ArticleApp);