import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div>
            <nav className="navbar header-navbar pcoded-header">
                <div className="navbar-wrapper">
                <div className="navbar-logo">
                <a className="mobile-menu" id="mobile-collapse" href="#!">
                  <i className="feather icon-menu" />
                </a>
                <a href="index-1.htm">
                  <img className="img-fluid" src="assets/images/logo1.png" alt="Theme-Logo" width="70%" />
                </a>
                <a className="mobile-options">
                  <i className="feather icon-more-horizontal" />
                </a>
              </div>
              <div className="navbar-container container-fluid">
                <ul className="nav-left">
                  <li>
                  <a href="/">
                    <i className="feather icon-home" />
                  </a>
                </li>
                <li>
                <a  href="#/livres/liste">
                  COMPTE
                </a>
              </li>
              <li>
                <a  href="/modal">
                  POGRAMMATION
                </a>
              </li>
              <li>
                <a href="/Suiv">
                  SUIVI
                </a>
              </li>
                </ul>
                <ul className="nav-right">
                  <li className="header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <i className="feather icon-bell" />
                        <span className="badge bg-c-pink">1</span>
                      </div>
                      <ul className="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                          <h6>Notifications</h6>
                          <label className="label label-danger">New</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                        <i className="feather icon-message-square" />
                        <span className="badge bg-c-green">1</span>
                      </div>
                    </div>
                  </li>
                  <li className="user-profile header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <img src="assets/images/admin1.png" className="img-radius" alt="User-Profile-Image" />
                        <span>Gestionnaire</span>
                        <i className="feather icon-chevron-down" />
                      </div>
                      <ul className="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                      <li>
                      <a href="user-profile.htm">
                        <i className="feather icon-user" /> Profil
                      </a>
                    </li>
                      <li>
                        <a href="#!">
                          <i className="feather icon-settings" /> Paramètre
                        </a>
                      </li>
                      <li>
                        <a href="auth-lock-screen.htm">
                          <i className="feather icon-lock" /> Vérouiller
                        </a>
                      </li>
                      <li>
                        <a href="auth-normal-sign-in.htm">
                          <i className="feather icon-log-out" /> Déconnecter
                        </a>
                      </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default Header;