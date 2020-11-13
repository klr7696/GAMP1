import axios from "axios";
import React, { useState, useEffect } from "react";
import LivreAPI from "../services/LivreAPI"
import Select from "./forms/Select";

export const ChoixLivre = (props) => {
  const [compte, setCompte] = useState({
    anneeRef: ""
  });

  const [errors, setErrors] = useState({
    anneeRef: ""
  });

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setCompte({...compte, [name]:value});
  };


  const fetchLivres = async () => {
    try {
      const data = await LivreAPI.findAll();
      setLivres(data);
    } catch(error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
   fetchLivres();
  }, [])

  return (
    <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
        <form className="j-pro">
          <div className="j-content">
            <div className="j-unit">
              <label className="j-label">ANNEE</label>
              <Select
                      name="livre"
                      label="Année"
                      value={compte.livre}
                      error={errors.livre}
                      onChange={handleChange}
              >
               {livres.map(livre =>(
                <option key={livre.id} value={livre.id} >
                  {livre.anneeRef}
                </option>
               ))}
              </Select>
            </div>
            <div className="j-response" />
          </div>
          <div className="j-footer">
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
