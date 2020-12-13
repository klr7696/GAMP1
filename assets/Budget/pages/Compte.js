import React, {useEffect, useState} from 'react';
import { ColumnDirective, ColumnsDirective, Filter, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from './forms/Select';


export const CompteAdd = () => {

  const [compte, setCompte] = useState({
    numeroLigne: "",
    libelleLigne: "",
    descriptionLigne: "",
    hierachieLigne: "",
    livreCompte: "",
    categorieLigne: "",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCompte({ ...compte, [name]: value });
  };


  return (
          <div className="pre-scrollable">
          
            <form>
              
              <div className="content">
                {/* start show/hide elements select */}
               
                <div className="col-sm-12">
                
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">NUMERO</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Numéro"
                      onChange={handleChange} 
                      value={compte.numeroLigne}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LIBELLE</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Libéllé"
                      onChange={handleChange} 
                      value={compte.libelleLigne}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">REMARQUE</label>
                  <div className="col-sm-10">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Remarque"
                      onChange={handleChange} 
                      value={compte.descriptionLigne}
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
                        name="chapitre"
                        defaultChecked="checked"
                        onChange={handleChange} 
                        value={compte.hierachieLigne}
                      />
                      CHAPITRE
                    </label>
                    <Select  
                      name="categorie" 
                      value={compte.categorieLigne} 
                      onChange={handleChange} >
                      <option value="fonc">DEPENSE DE FONCTIONNEMENT</option>
                      <option value="inves">DEPENSE D'INVESTISSEMENT</option>
                    </Select>
                      
                  </div>
                  <div className="form-check form-check-inline col-md-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender-2"
                        onChange={handleChange} 
                        value={compte.hierachieLigne}
                      />
                      ARTICLE
                    </label>
                    <Select label="" name="chapitre" value={compte.categorieLigne} onChange={handleChange} >
                      <option selected="">Chapitre</option>
                      <option value="1">60</option>
                      <option value="2">61</option>
                    </Select>
                  </div>
                  <div className="form-check form-check-inline col-md-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender-3"
                        onChange={handleChange} 
                        value={compte.hierachieLigne}
                      />
                      PARAGRAPHE
                    </label>
                    <Select name="article" value={compte.categorieLigne} onChange={handleChange} >
                      <option selected="">Article</option>
                      <option value="1">600</option>
                      <option value="2">610</option>
                    </Select>
                  </div>
                </div>
              
                </div>
                {/* end selects */}
              </div>
              {/* end /.content */}
              <div className="card-footer text-right">
                <button type="submit" className="btn btn-primary">Ajouter</button>
              </div>
              {/* end /.footer */}
            </form>
          </div>
  );
};
{/*
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

  const [compte, setCompte] =useState([]);

  useEffect(() => {
    axios
        .get(`http://localhost:8000/api/livres/1/lignes?hierachieLigne=CHAPITRE`)
        .then((response) => response.data["hydra:member"])
        .then((data) => setCompte(data))
        .catch((error) => console.log(error.response));
  }, []);

  return (
  
    <div className="row">
    <div className="col-lg-4">
      <div className="card pre-scrollable1">
       <div className="card-block">
       <div className="form-group row">
         <div className="col-sm-6">
              <h6>Chapitre</h6>
         </div>
         <div className="col-sm-6">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Rechercher ..."
                  />
         </div>
        </div>
              <table className="table table-hover table-bordered">
                  <thead>
                  <tr>
                    <th>Num</th>
                    <th>Libéllé</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    {compte.map (chap =>  
                    <tr key={chap.id}>
                      <td>{chap.numeroLigne}</td>
                      <td>{chap.libelleLigne}</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                          <a href="livres/1/lignes?hierachieLigne=fils" className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Lister"><i className="icofont icofont-square-right"></i></a>
                      </td>
                    </tr>)}
                   
                  </tbody>
              </table>
          </div>
        </div>
      </div>



      <div className="col-lg-4">
      <div className="card card-block pre-scrollable1">
      <div className="dt-responsive">
      <h6>ARTICLE</h6>
      <table id="simpletable" className="table table-striped table-bordered nowrap">
          <thead>
          <tr>
          <th>Num</th>
          <th>Libéllé</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{chap.numeroLigne}</td>
              <td>{chap.libelleLigne}</td>
              <td>
                  <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                   <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                   <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Lister"><i className="icofont icofont-square-right"></i></a>
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
      <h6>PARAGRAPHE</h6>
              <table id="add-row-table" className="table table-striped table-bordered nowrap">
                  <thead>
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
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                          </td>

                    </tr>
                    <tr>
                      <td>60</td>
                      <td>Achat de carburant hr</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                          </td>

                    </tr>
                    <tr>
                      <td>60</td>
                      <td>Achat de carburant</td>
                      <td>
                          <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                           <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                           </td>

                    </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};*/}


export const Compte = () => {
  return (
    <section id="main-content">
      <div className="form-row">
        <div className=" col-lg-8">
          <CompteAdd />
        </div>
       { /*<div className="col-lg-4">
          <CompteNotifi />
        </div>
      <div className="col-lg-12">
        <CompteAffich />
  </div>*/}
      </div>
    </section>
  );
};

export const CompteList =(props) => {
const {id = ""} = props.match.params;

const [compte, setCompte] = useState([]);

useEffect(() => {
  axios
      .get(`http://localhost:8000/api/livres/${id}/lignes?hierachieLigne=CHAPITRE`)
      .then((response) => response.data["hydra:member"])
      .then((data) => setCompte(data))
      .catch((error) => console.log(error.response));
}, []);

    return (
      
  <div className='control-pane'>
    <div className='control-section'>
     <div className='col-md-12'>
    <div className="mb-1 d-flex justify-content-between align-items-center">
    <h4>Liste de lignes budgétaires</h4>
    <Link to="/compte/new" className="btn btn-primary">Ajouter de Nouveau</Link>
    </div>   
       <TreeGridComponent dataSource={compte}
        childMapping='compteFils' height='420' allowPaging='true' allowFiltering='true' 
       filterSettings={{ mode: 'Immediate', type: 'FilterBar', hierarchyMode: 'Parent' }}>
        <ColumnsDirective>
          <ColumnDirective field='numeroLigne' headerText='Numéro' width='90'></ColumnDirective>
          <ColumnDirective field='hierachieLigne' headerText='Hiérarchie' width='90' />
          <ColumnDirective field='libelleLigne' headerText='Libéllé' width='200' />
          <ColumnDirective field='categorieLigne.nomCat' headerText='Catégorie' width='100'/>
        </ColumnsDirective>
        <Inject services={[Filter, Page]}/>
      </TreeGridComponent>
    </div>
   </div>
    </div>
    );
}
