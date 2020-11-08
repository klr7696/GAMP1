import React, { Component } from 'react'

export default class ErrorPage extends Component {
    render() {
        return (
         <div>
  <div className="image" />
  {/* Your logo on the top left */}
  <a href="#" className="logo-link" title="back home">
    <img src="error/img/logo.png" className="logo" alt="Company's logo" />
  </a>
  <div className="content">
    <div className="content-box">
      <div className="big-content">
        {/* Main squares for the content logo in the background */}
        <div className="list-square">
          <span className="square" />
          <span className="square" />
          <span className="square" />
        </div>
        {/* Main lines for the content logo in the background */}
        <div className="list-line">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        {/* The animated searching tool */}
        <i className="fa fa-search" aria-hidden="true" />
        {/* div clearing the float */}
        <div className="clear" />
      </div>
      {/* Your text */}
      <h1>Oops! Error 404 not found.</h1>
      <p>The page you were looking for doesn't exist.<br />
        We think the page may have moved.</p>
    </div>
  </div>
</div>

        )
    }
}
