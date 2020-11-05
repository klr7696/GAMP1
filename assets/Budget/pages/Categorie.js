import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Field } from './forms/Field';


export const CategorieAdd = props => {

 const [categorie, setCategorie] = useState({
   nomCat:"",
   abreviationCat:""
 });

 const handleChange = ({currentTarget}) =>{
   const {name, value} = currentTarget;
   setCategorie({ ...categorie, [name]: value});
 };

    return ( 
        <div className="page-body card">
              <div className="card-block">
                <form >
                  <Field
                    name="nomCat"
                    label="Dénomination"
                    placeholder="Nom"
                    value={categorie.nomCat}
                    onChange={handleChange}
                  />
                  <Field
                    name="abreviatonCat"
                    label="Abreviation"
                    placeholder="ABR CAT"
                    value={categorie.abreviationCat}
                    onChange={handleChange}
                  />
  
                  <div className="form-group row">
                    <label className="col-sm-7 " />
                    <div className="col-sm-4">
                      <button type="submit" className="btn btn-primary m-b-0">
                        Ajouter
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    );
};

export const CategorieList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      axios
          .get("http://localhost:8000/api/categories")
          .then((response) => response.data["hydra:member"])
          .then((data) => setCategories(data))
          .catch((error) => console.log(error.response));
  }, []);

  const handleDelete = (id) => {
      const originalCategories = [...categories];

      setCategories(categories.filter((categorie) => categorie.id !== id));

      axios
          .delete("http://localhost:8000/api/categories/" + id)
          .then((response) => console.log("OK"))
          .catch((error) => {
              setCategories(originalCategories);
              console.log(error.response);
          });
  };

  return (
     <div>
<div className="card">
  <div className="card-header">
    <h2>Liste des catégories de ligne</h2>
  </div>
  <div className="card-block pre-scrollable">
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Dénomination</th>
            <th>Abreviation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {categories.map((categorie) => (
            <tr key={categorie.id}>
                <td>{categorie.nomCat}</td>
                <td>{categorie.abreviationCat}</td>
                <td className="text-center">
                    <button
                        onClick={() => handleDelete(categorie.id)}
                        className="btn btn-sm btn-danger"
                    >
                        Supprimer
                    </button>
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

   );
};