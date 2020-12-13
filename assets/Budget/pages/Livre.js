import React, { useState, useEffect } from "react";
import axios from "axios";
import LivreCard from "./forms/LivreCard";
import { Link } from "react-router-dom";
import LivresAPI from "../services/LivreAPI";
import { toast } from "react-toastify";

export const LivreAdd = ({match, history}) => {

  const {id="new"} = match.params;

  const [livre, setLivre] = useState({
    anneeRef: "",
    decretLivre: "",
    adoptionDate: "",
    executionDate: "",
    descriptionLivre: "",
  });

  
  const [editing, setEditing] = useState(false);

  const fetchLivre = async id => {
    try {
      const { anneeRef, decretLivre, adoptionDate, executionDate, descriptionLivre} = 
      await LivresAPI.find(
        id
      );
      setLivre({anneeRef, decretLivre, adoptionDate, executionDate, descriptionLivre});
    }catch (error) {
      history.replace("/livres/liste");
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchLivre(id);
    }
  }, [id]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setLivre({ ...livre, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editing) {
        await LivresAPI.update(id, livre);
        toast.success("Livre modifié");
      } else {
        await LivresAPI.create(livre);
        toast.error("Livre Ajouté");
        history.replace("/livres/liste")
      }
    } catch ({response}) {
      const  {violations} = response.data;

      if (violations) {
        const apiErrors = {};
        violations.forEach(({propertyPath, message}) => {
          apiErrors[propertyPath] =message;
        });
        toast.error("Erreur");
      }
    }
  };

  return (
    <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
        <form  className="j-pro" onSubmit={handleSubmit}>
          <div className="j-content">
            <div className="j-unit main">
              <label className="j-label">ANNEE</label>
              <input 
              type="number" 
              name="anneeRef"
              placeholder="2020"
              className="form-control"
              value={livre.anneeRef}
              onChange={handleChange} 
             />
            </div>
           
            <div className="j-unit">
              <label className="j-label">DECRET</label>
              <input
                type="text"
                className="form-control"
                name="decretLivre"
                placeholder="décret de la nomenclature"
                value={livre.decretLivre}
                onChange={handleChange}
              />
            </div>

            <div className="j-row">
              <div className="j-span6 j-unit">
                <label className="j-label">Date d'adoption</label>
                <input
                  type="date"
                  name="adoptionDate"
                  className="form-control"
                  placeholder="Numéro"
                  value={livre.adoptionDate}
                  onChange={handleChange}
                />
              </div>
              <div className="j-span6 j-unit">
                <label className="j-label">Date de mise en Oeuvre</label>
                <input
                  type="date"
                  name="executionDate"
                  className="form-control"
                  placeholder="Numéro"
                  value={livre.executionDate}
                 onChange={handleChange}
                />
              </div>
            </div>

            <div className="j-unit">
              <label className="j-label">REMARQUE</label>
              <textarea
                name="descriptionLivre"
                placeholder="description de la nomenclature"
                className="form-control"
                value={livre.descriptionLivre}
                onChange={handleChange}
              />
            </div>
            <div className="j-unit">
              <label className="j-label">FICHIER JOINT</label>
              <input type="file" id="children" name="children"  className="form-control"/>
            </div>
          </div>
        
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

  const fetchLivres = async () =>{
    try {
      const data = await LivresAPI.findAll();
      setLivres(data);
      toast.success("Chargé Avec succès");
    } catch (error) {
      toast.error("erreur de chargement");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLivres();
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

  const [livre, setLivre] = useState({});

  const fetchLivres = async id =>{
    try{
      const data = await axios
      .get("http://localhost:8000/api/livres/" + id)
      .then(response => response.data);
      const {anneeRef, decretLivre, adoptionDate,executionDate,descriptionLivre,nombreCompte} = data
  
      setLivre({anneeRef, decretLivre, adoptionDate, executionDate, descriptionLivre, nombreCompte});
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
        <div className="col-md-12">
          <div className ="card social-card bg-simple-c-blue">
          <div className="card-block">
                  <div className="row align-items-center">
                  <div className="col-auto">
                    <i className="feather icon-book f-40 text-c-green social-icon"></i>
                </div>
                <div className="col">
              <h2 className ="text-center"> {livre.anneeRef} </h2>
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
                      <div className= "card-action" text-right>
                          <Link to ="/">Retour</Link>
                      </div>
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