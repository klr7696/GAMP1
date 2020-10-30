import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
           <div className="bg-light border-right" id="sidebar-wrapper">
  <div className="sidebar-heading">GAMP </div>
  <div className="dropdown-divider" />
  <div className="list-group list-group-flush">
    <a href="#" className="list-group-item list-group-item-action bg-light"><h3>DAFB</h3></a>
    <a href="#" className="dropdown-toggle list-group-item list-group-item-action bg-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nomenclature</a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Créer</a>
            <a className="dropdown-item" href="#">Consulter</a>
    </div>
    <a href="#" className="dropdown-toggle list-group-item list-group-item-action bg-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catégorie</a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Créer</a>
            <a className="dropdown-item" href="#">Consulter</a>
    </div>
    <a href="#" className="dropdown-toggle list-group-item list-group-item-action bg-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ligne</a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Créer</a>
            <a className="dropdown-item" href="#">Consulter</a>
    </div>
    <div className="dropdown-divider" />
  </div>
</div>

    );
    }
}

export default Sidebar;