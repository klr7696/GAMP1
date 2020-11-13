import React, { useState, useEffect } from "react";
import axios from "axios";
import LivreCard from "./forms/LivreCard";
import { Link } from "react-router-dom";
import { data } from "jquery";

export const LivreAdd = () => {
  return (
    <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
        <form method="post" className="j-pro" id="j-pro" noValidate>
          <div className="j-content">
            {/* start name */}
            <div className="j-unit">
              <label className="j-label">ANNEE</label>
              <input id="children" type="text" name="anneeRef" placeholder="2020" />
            </div>
            {/* end name */}
            {/* start email phone */}
            <div className="j-unit">
              <label className="j-label">DECRET</label>
              <input
                type="text"
                name="decretLivre"
                placeholder="décret de la nomenclature"
              />
            </div>

            <div className="j-row">
              <div className="j-span6 j-unit">
                <label className="j-label">Date d'adoption</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Numéro"
                />
              </div>
              <div className="j-span6 j-unit">
                <label className="j-label">Date de mise en Oeuvre</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Numéro"
                />
              </div>
            </div>

            <div className="j-unit">
              <label className="j-label">REMARQUE</label>
              <textarea
                name="descriptionLivre"
                placeholder="description de la nomenclature"
              />
            </div>
            <div className="j-unit">
              <label className="j-label">FICHIER JOINT</label>
              <input type="file" id="children" name="children" />
            </div>
            {/* end message */}
            {/* start response from server */}
            <div className="j-response" />
            {/* end response from server */}
          </div>
          {/* end /.content */}
          <div className="j-footer">
            <button type="submit" className="btn btn-primary">
              CREER
            </button>
          </div>
          {/* end /.footer */}
        </form>
      </div>
    </div>
  );
};

export const LivreList = () => {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/livres")
      .then((response) => response.data["hydra:member"])
      .then((data) => setLivres(data));
  }, []);

  return (
    <div>
      <div className="card-header">
        <h4>Liste des Nommenclatures</h4>
      </div>
      <div className="container">
      <div className="row">
        {livres.map((livre) => (
          <LivreCard key={livre.id} livre={livre} />
        ))}
      </div>
      </div>
    </div>
  );
};

export const LivreDetail = (props) => {
  const {id = "new"} = props.match.params;

  const [livre, setLivre] = useState({
    anneeRef:"", 
    decretLivre:"", 
    adoptionDate:""
  });

  const fetchLivres = async id =>{
    try{
      const data = await axios
      .get("http://localhost:8000/api/livres/" + id)
      .then(response => response.data);
      const {anneeRef, decretLivre, adoptionDate,executionDate,descriptionLivre,nombreCompte} =data
  
      setLivre({anneeRef, decretLivre, adoptionDate,executionDate,descriptionLivre,nombreCompte});
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if(id !== "new"){
   fetchLivres(id);
    }
  }, [id])

  return (
      <div>
      { livre ? (
          <div className ="row">
          <div className="col-sm-10 offset-m2">
                  <div className="card hoverable">
              <h2 className ="text-center"> {livre.anneeRef} </h2>
                    <div className="card-image">
                    <i className="feather icon-book text-c-lite-green d-block f-40" />
                      </div>                      
                    <div className="card-stacked">
                          <div className="card-content">
                              <table className="bordered striped">
                                  <tbody>
                                      <tr>
                                          <td>Décret</td>
                                          <td><strong>{livre.decretLivre}</strong></td>
                                      </tr>
                                      <tr>
                                          <td>Année d'adoption</td>
                                          <td><strong>{livre.adoptionDate}</strong></td>
                                      </tr>
                                      <tr>
                                          <td>Année d'execution</td>
                                          <td><strong>{livre.executionDate}</strong></td>
                                      </tr>
                                      <tr>
                                          <td>Remarque</td>
                                          <td><strong>{livre.descriptionLivre}</strong></td>
                                      </tr>
                                      <tr>
                                          <td>Nombre de Lignes</td>
                                          <td><strong>{livre.nombreCompte}</strong></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      <div className= "card-action">
                          <Link to ="/">Retour</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      ) : (
          <h4 className="center">Aucun livre à afficher !</h4>          
      )}
  </div>
  );
}