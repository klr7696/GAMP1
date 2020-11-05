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
                  <Field
                    name="dateAdoption"
                    type="date"
                    label="Date d'adoption"
                    placeholder="Décret du livre"
                  />
                  <Field
                    name="dateOeuvre"
                    type="date"
                    label="Date de mise en Oeuvre"
                  />
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
                    <div className="">
                    <button className="btn btn-primary">Ajouter</button>  
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
                  <button className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-list"/></button>
                  <button className="btn btn-primary btn-sm btn-round"><i className="feather icon-edit"/></button>
                </div>
              </div>
            </div>  
          )}
          </div> 
    
    
      );
    };
