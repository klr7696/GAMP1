import React, { useState, useEffect } from "react";
import axios from "axios";
import LivreCard from "./forms/LivreCard";
import { Link } from "react-router-dom";
import { Field, Field1 } from "./forms/Field";
import { toast } from "react-toastify";
import LivresAPI from "../services/LivreAPI";

export const LivreAdd = ({history}) => {


  const [livre, setLivre] = useState({
    anneeRef: "",
    decretLivre: "",
    adoptionDate: "",
    executionDate: "",
    descriptionLivre: ""
  });

  const [errors, setErrors] = useState(
  {
    anneeRef: "",
    decretLivre: "",
    adoptionDate: "",
    executionDate: "",
    descriptionLivre: ""
  });

  
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setLivre({ ...livre, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await LivresAPI.create(livre);
        toast.success("Livre Ajouté");
        history.replace("/livres/liste")

     setErrors({});
    } catch ({response}) {
      const  {violations} = response.data;

      if (violations) {
        const apiErrors = {};
        violations.forEach(({propertyPath, message}) => {
          apiErrors[propertyPath] =message;
        });

        setErrors(apiErrors);
        toast.error("Erreur");
      }
    }
  };


  return (
    <div className="page">
      <div className="j-wrapper j-wrapper-660">
        <form className="j-pro" onSubmit={handleSubmit}>

              <Field 
              label="ANNEE"
              type="text" 
              name="anneeRef" 
              placeholder="2020" 
              value={livre.anneeRef}
              onChange={handleChange}
              error={errors.anneeRef}
              required
              />

              <Field
               label="DECRET"
                type="text"
                name="decretLivre"
                placeholder="décret de la nomenclature"
                value={livre.decretLivre}
              onChange={handleChange}
              error={errors.decretLivre}
              required
              />

            <div className="j-row">
            <div className="j-span6">
                <Field
                  label= "DATE ADOPTION"
                  type="text"
                  name="adoptionDate"
                  value={livre.adoptionDate}
                  onChange={handleChange}
                  error={errors.adoptionDate}
                  required
                />
              </div>
              <div className="j-span6">
                <Field
                 label="DATE EXECUTION"
                  type="text"
                  name="executionDate"
                  value={livre.executionDate}
                  onChange={handleChange}
                  error={errors.executionDate}
                  required
                />
                </div>
            </div>

              <Field1
                label="REMARQUE"
                name="descriptionLivre"
                placeholder="description de la nomenclature"
                value={livre.descriptionLivre}
                onChange={handleChange}
                error={errors.descriptionLivre}
              />
          
           {/* <div className="j-unit">
              <label className="j-label">FICHIER JOINT</label>
              <Field 
              type="file" 
              id="children" 
              name="children" 
              />
            </div>} */}
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

  const [livre, setLivre] = useState({});

  const fetchLivres = async id =>{
    try{
      const data = await axios
      .get("http://localhost:8000/api/livres/" + id)
      .then(response => response.data);
      const {anneeRef, decretLivre, adoptionDate,executionDate,descriptionLivre,nombreCompte} = data
  
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
                          <Link to ="/livres/liste">Retour</Link>
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