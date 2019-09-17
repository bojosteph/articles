import React, { Component } from 'react';
import { Parallax } from "react-parallax"
import { Link } from 'react-router-dom';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80";
const image2 =
  "https://images.unsplash.com/photo-1544965850-6f8a66788f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1382&q=80";
const image3 =
  "https://images.unsplash.com/photo-1498475932703-000eb46e6375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const image4 =
  "https://images.unsplash.com/photo-1542931415-162aeab4418f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1778&q=80";


export class Landing extends Component {
  render() {
    return (
      <div style={styles}>

      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          
        </div>
      </Parallax>
      <h5>Welcome to Articles</h5>
      <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
    
        </div>
      </Parallax>
      <div style={{ height: "50vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Articles</b>{" "}a{" "}
              <span style={{ fontFamily: "monospace" }}>RAILS REACT</span> app
              
            </h4>
            <p className="flow-text grey-text text-darken-1">
              This is  a  full-stack app with user authentication                  
            </p>
            <p>You can create articles and add image or GIFs</p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>           
      </div>
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 500 }}>
        
        </div>
      </Parallax>
      <h5 className="grey-text text-darken-3 lighten-3">Push yourself, because no one else is going to do it for you.</h5>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>do something great</div>
        </div>
      </Parallax>
      <div style={{ height: 500 }} />
      <div className="footer-copyright">
            <div className="container">
            © 2019 Articles App
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
    </div>
    )
  }
}

export default Landing;
