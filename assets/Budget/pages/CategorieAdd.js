import React, { useState} from 'react';
import Field from './forms/Field';

export const CategorieAdd = () => {

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