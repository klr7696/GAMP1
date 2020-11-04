import React from 'react';
import Field from './forms/Field';

export const CategorieAdd = () => {
    return ( 
        <div className="page-body">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header" />
  
              <div className="card-block">
                <form>
                  <Field
                    name="Nomination"
                    type="text"
                    label="Nomination"
                    placeholder="Nom"
                  />
                  <Field
                    name="abreviatonCat"
                    type="text"
                    label="Abreviation"
                    placeholder="ABR CAT"
                  />
  
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label sub-title">Description</label>
                    <div className="col-sm-6">
                      <textarea
                        className="form-control"
                        id="descriptionCat"
                        name="descriptionCat"
                        placeholder="Description"
                      />
                      <span className="messages" />
                    </div>
                  </div>
  
                  <div className="form-group row">
                    <label className="col-sm-8 " />
                    <div className="col-sm-4">
                      <button type="submit" className="btn btn-primary m-b-0">
                        Ajouter
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export const CategorieList = () => {
    return ( 
       <div>
  <div className="card">
    <div className="card-header">
      <h2>Liste des catégories de ligne</h2>
    </div>
    <div className="card-block">
      <div className="dt-responsive table-responsive">
        <table id="show-hide-table" className="table table-striped table-bordered nowrap">
          <thead>
            <tr>
              <th>Nomination</th>
              <th>Abreviation</th>
              <th>Remarque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Depense de Fonctionnement</td>
              <td>DF</td>
              <td>Learn more about each</td>
            </tr>
            <tr>
            <td>Depense de </td>
            <td>D</td>
            <td>Learn more about each</td>
          </tr>
          <tr>
          <td>Depense d Investissement</td>
          <td>DI</td>
          <td>Learn more about each</td>
        </tr>
        <tr>
              <td>Depense de Fonctionnement</td>
              <td>DF</td>
              <td>Learn more about each</td>
            </tr>
            <tr>
            <td>Depense de </td>
            <td>D</td>
            <td>Learn more about each</td>
          </tr>
          <tr>
          <td>Depense d Investissement</td>
          <td>DI</td>
          <td>Learn more about each</td>
        </tr>
        <tr>
              <td>Depense de Fonctionnement</td>
              <td>DF</td>
              <td>Learn more about each</td>
            </tr>
            <tr>
            <td>Depense de </td>
            <td>D</td>
            <td>Learn more about each</td>
          </tr>
          <tr>
          <td>Depense d Investissement</td>
          <td>DI</td>
          <td>Learn more about each</td>
        </tr>
        <tr>
              <td>Depense de Fonctionnement</td>
              <td>DF</td>
              <td>Learn more about each</td>
            </tr>
            <tr>
            <td>Depense de </td>
            <td>D</td>
            <td>Learn more about each</td>
          </tr>
          <tr>
          <td>Depense d Investissement</td>
          <td>DI</td>
          <td>Learn more about each</td>
        </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

     );
};