import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const CompteAdd = () => {
  return (
    <div className="page-body row ">
        <div className="col-md-12">
          {/* Range slider card start */}
          <div className="card card-block pre-scrollable">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Numéro</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Numéro"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Libéllé</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Libéllé"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Remarque</label>
                  <div className="col-sm-10">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Remarque"
                    />
                  </div>
                </div>
                <div className="col-sm-10">
                  <label className="col-sm-2 col-form-label"></label>
                  <div className="form-check form-check-inline col-md-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender-1"
                        defaultChecked="checked"
                      />{" "}
                      Chapitre
                    </label>
                    <select className="custom-select">
                      <option selected="">Catégorie</option>
                      <option value="1">DEP FONC</option>
                      <option value="2">DEP INV</option>
                    </select>
                  </div>
                  <div className="form-check form-check-inline col-md-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender-2"
                        defaultValue="option2"
                      />{" "}
                      Article
                    </label>
                    <select className="custom-select">
                      <option selected="">Chapitre</option>
                      <option value="1">60</option>
                      <option value="2">61</option>
                    </select>
                  </div>
                  <div className="form-check form-check-inline col-md-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender-2"
                        defaultValue="option2"
                      />{" "}
                      Paragraphe
                    </label>
                    <select className="custom-select">
                      <option selected="">Article</option>
                      <option value="1">600</option>
                      <option value="2">610</option>
                    </select>
                  </div>
                  <span className="messages" />
                  <div className="form-group row">
                    <label className="col-sm-11 " />
                    <div className="col-sm-1">
                      <button
                        type="submit"
                        className="btn btn-primary m-b-0 "
                      >
                      Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
   
  );
};

export const CompteNotifi = () => {
  return (

    <div className="page-body row">
        <div className="col-md-12">
          <div className="card pre-scrollable">
            <div className="card-block text-center">
            <h4 className="m-t-20 sub-title">Description</h4>
            <div className="col-sm-6 col-form-label sub-title">Numéro :</div>
            <div className="col-sm-6 col-form-label sub-title">Libéllé :</div>
            <div className="col-sm-6 col-form-label sub-title">Remarque :</div>
            <div className="col-sm-6 col-form-label sub-title">Libéllé :</div>
                  </div>
                </div>
              
            </div>
          </div>
       

  );
};

export const CompteAffich = () => {
  return (

    <div className="page-body row ">
    <div className="col-lg-4">
    
      <div className="card card-block pre-scrollable1">

      <div className="dt-responsive">
      
              <table id="row-select" className="table table-striped table-bordered nowrap">
             
                  <thead>
                  <h6>CHAPITRE</h6>
                  <tr>
                  <th>Num</th>
                  <th>Libéllé</th>
                  <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>60</td>
                      <td>Achat de carburant</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Lister"><i className="icofont icofont-square-right"></i></a>
                      </td>

                    </tr>
                    <tr>
                      <td>61</td>
                      <td>Achat de comsommable</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Lister"><i className="icofont icofont-square-right"></i></a>
                      </td>

                    </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
      <div className="card card-block pre-scrollable1">
      <div className="dt-responsive">
      <table id="simpletable" className="table table-striped table-bordered nowrap">
          <thead>
          <h6>ARTICLE</h6>
          <tr>
          <th>Num</th>
          <th>Libéllé</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>60</td>
              <td>Achat de carburant</td>
              <td>
                  <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                   <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                   <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Lister"><i className="icofont icofont-square-right"></i></a>
              </td>

            </tr>
          </tbody>
      </table>
  </div>
          
        </div>
      </div>

      <div className="col-lg-4">
      <div className="card card-block pre-scrollable1">
      <div className="dt-responsive">
              <table id="add-row-table" className="table table-striped table-bordered nowrap">
                  <thead>
                  <h6>PARAGRAPHE</h6>
                  <tr>
                  <th>Num</th>
                  <th>Libéllé</th>
                  <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>60</td>
                      <td>Achat de carburant ze</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                          </td>

                    </tr>
                    <tr>
                      <td>60</td>
                      <td>Achat de carburant hr</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                          </td>

                    </tr>
                    <tr>
                      <td>60</td>
                      <td>Achat de carburant</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                           </td>

                    </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>


  );
};


export const Compte = () => {
  return (
    <section id="main-content">
      <div className="form-row">
        <div className=" col-lg-8">
          <CompteAdd />
        </div>
        <div className="col-lg-4">
          <CompteNotifi />
        </div>
      <div className="col-lg-12">
        <CompteAffich />
      </div>
      </div>
    </section>
  );
};

export const CompteList = () => {

  const [lignes, setLignes] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/livres/5/lignes?hierachieLigne=CHAPITRE")
    .then(response => response.data["hydra:member"])
    .then(data => setLignes(data));
  }, []);

  return ( 
    <div className="card">
    <div className="card-header">
      <h2>Liste des lignes budgétaires</h2>
    </div>
        <table className="table table-hover">
          <thead>
            <tr>
              
              <th>Numéro</th>
              <th>Libéllé</th>
              <th>Hierarchie</th>
              <th>Catégorie</th>
              <th>Nombre d'Article</th>
              
            </tr>
          </thead>
          <tbody>
          {lignes.map(ligne => 
            <tr key={ligne.id}>

              <td>{ligne.numeroLigne} </td>
              <td>{ligne.libelleLigne} </td>
              <td>{ligne.hierachieLigne} </td>
              <td>{ligne.categorieLigne.nomCat} </td>
              <td className="text-center">
              <span className="badge badge-primary">{ligne.articleNombre}</span>
              </td>   
            </tr>  
            )}
          </tbody>
        </table>
    </div>
   );
}
