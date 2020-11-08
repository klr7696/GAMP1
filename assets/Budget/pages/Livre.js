import React,{useState, useEffect} from "react";
import axios from 'axios';
import { Field, Field1 } from "./forms/Field";



export const LivreAdd = () => {

    return (
        <div className="card">
          <div className="col-sm-12 card-block">
                <form>
                  <Field
                    name="annee"
                    type="number"
                    label="Année"
                    placeholder="2016"  
                  />
                  <Field
                  name="decretLivre"
                  type="text"
                  label="Décret"
                  placeholder="Décret du livre"
                  />
                  <div>
                  <Field
                    name="dateAdoption"
                    type="date"
                    label="Date d'adoption"
                   
                  />
                  <Field
                    name="dateOeuvre"
                    type="date"
                    label="Date de mise en Oeuvre"
                   
                  />
                  </div>
                  <Field1
                    name="descriptionLivre"
                    type="textarea"
                    label="Description"
                    placeholder="Description du livre"
                   
                  />
                   
                  <Field
                  name="choixFichier"
                  type="file"
                  label="Fichier joint"
                 
                  />
                    <div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>  
                    </div>
                </form>
              </div>
            </div>
      )
    };

    export const LivreList = () => {
  
      const [livres, setLivres] = useState([]);
    
      useEffect(() => {
        axios
        .get("http://localhost:8000/api/livres")
        .then(response => response.data["hydra:member"])
        .then(data => setLivres(data));
      }, []);
    
      return (
        <div>
        <div className="card-header">
             <h4>Liste des Nommenclatures</h4>
          </div>
        <div className="form-group row">
        {livres.map(livre => 
         
            <div key={livre.id} className="col-md-12 col-lg-4">
              <div className="card card-block">
                <div className="text-center">
                  <i className="feather icon-book text-c-lite-green d-block f-40" />
                  <h4 className="m-t-20"><span className="text-c-lite-green">{livre.anneeRef}</span></h4>
                  <p className="m-b-20">{livre.decretLivre}</p>
                  <p className="m-b-20 m-r-50"> Compte : {livre.nombreCompte}</p>             
                  <button className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-delete"/></button>
                  <a type="button" href="#/comptes/liste" className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-list"/></a>
                  <a type="button" href="#/compte" className="btn btn-primary btn-sm btn-round"><i className="feather icon-edit"/></a>
                </div>
              </div>
            </div>  
          )}
          </div> 
          </div>
    
      );
    };
