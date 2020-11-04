import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
      <div>
            <nav className="pcoded-navbar">
              <div className="pcoded-inner-navbar main-menu">
              <div className="pcoded-navigatio-lavel"><h2>DA<span>FB</span></h2></div>
              <ul className="pcoded-item pcoded-left-item">
                <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                    <span className="pcoded-micon"><i className="feather icon-book"></i></span>
                    <span className="pcoded-mtext">Nomenclature</span>
                  </a>
                  <ul className="pcoded-submenu">
                    <li className>
                      <a href="#/livre">
                      <i className="feather icon-edit"></i>
                        <span className="pcoded-mtext"> Créer</span>
                      </a>
                    </li>
                    <li className>
                      <a href="#/livre/liste">
                      <i className="feather icon-list"></i>
                        <span className="pcoded-mtext">Consulter</span>
                      </a>
                    </li>
              </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                    <span className="pcoded-micon"><i className="feather icon-plus-square" /></span>
                    <span className="pcoded-mtext">Catégorie</span>
                  </a>
                  <ul className="pcoded-submenu">
                  <li className>
                    <a href="#/categorie">
                    <i className="feather icon-edit"></i>
                      <span className="pcoded-mtext"> Créer</span>
                    </a>
                  </li>
                  <li className>
                    <a href="#/categories/liste">
                    <i className="feather icon-list"></i>
                      <span className="pcoded-mtext">Consulter</span>
                    </a>
                  </li>
            </ul>
            </li>
            <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-list" /></span>
              <span className="pcoded-mtext">Ligne</span>
            </a>
            <ul className="pcoded-submenu">
            <li className>
              <a href="#/compte">
              <i className="feather icon-edit"></i>
                <span className="pcoded-mtext"> Créer</span>
              </a>
            </li>
            <li className>
              <a href="#/comptes/liste">
              <i className="feather icon-list"></i>
                <span className="pcoded-mtext">Consulter</span>
              </a>
            </li>
      </ul>
      </li>
            </ul>
            </div>
            </nav>
          </div>
    );
    }
}

export default Sidebar;