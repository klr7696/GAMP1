import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LivreAPI from "../services/LivreAPI"
import Select from "./forms/Select";

export const ChoixLivre = ({livre}) => {

  const history = useHistory();
    
    const goToLigne =(id) => {
        history.push(`/livre/${id}/lignes`);
    }

  const [choix, setChoix] = useState({
    livre: "",
  });

  const [livres, setLivres] = useState([]);

  const [errors, setErrors] = useState({
    livre: ""
  });

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setChoix({...choix, [name]:value});
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
            
            <Select  
                name="livre" 
                label="ANNEE" 
                value={choix.livre} 
                error={errors.livre}
                onChange={handleChange}
                >
              {livres.map(livre => 
              <option key={livre.id} livre={livre}>
                {livre.anneeRef}
              </option>)}
            </Select>

            <div className="j-response" />
          </div>
          <div className="j-footer">
            <button className="btn btn-primary">
              Ajouter Ligne
            </button>
            <button className="btn btn-secondary m-r-50" onClick={()=> goToLigne(livre.id)}>
              Consulter Ligne
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
