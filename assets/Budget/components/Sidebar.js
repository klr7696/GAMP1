import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
      <div className="pcoded-wrapper">
            <nav className="pcoded-navbar">
              <div className="pcoded-inner-navbar main-menu">
              <div className="pcoded-navigatio-lavel"><h2>DA<span>FB</span></h2></div>
              <ul className="pcoded-item pcoded-left-item">
                <li className="pcoded-hasmenu">
                  <a type="button" href="javascript:void(0)">
                    <span className="pcoded-micon"><i className="feather icon-book"></i></span>
                    <span className="pcoded-mtext">Nomenclature</span>
                  </a>
                  <ul className="pcoded-submenu">
                    <li className="">
                      <a href="#/livre">
                      <i className="feather icon-edit"></i>
                        <span className="pcoded-mtext"> Créer</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#/livres/liste">
                      <i className="feather icon-list"></i>
                        <span className="pcoded-mtext">Consulter</span>
                      </a>
                    </li>
              </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a type="button" href="javascript:void(0)">
                    <span className="pcoded-micon"><i className="feather icon-plus-square" /></span>
                    <span className="pcoded-mtext">Catégorie</span>
                  </a>
                  <ul className="pcoded-submenu">
                  <li className="">
                    <a href="#/categorie">
                    <i className="feather icon-edit"></i>
                      <span className="pcoded-mtext"> Créer</span>
                    </a>
                  </li>
                  <li >
                    <a href="#/categories/liste">
                    <i className="feather icon-list"></i>
                      <span className="pcoded-mtext">Consulter</span>
                    </a>
                  </li>
            </ul>
            </li>
            <li>
            <a type="button" href="#/choix">
              <span className="pcoded-micon"><i className="feather icon-list" /></span>
              <span className="pcoded-mtext">Ligne</span>
            </a>
            </li>
            </ul>
            </div>
            </nav>
          </div>
    );
    }
}

export default Sidebar;