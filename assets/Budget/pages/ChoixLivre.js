import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import LivreAPI from "../services/LivreAPI"
import Select from "./forms/Select";

const ChoixLivre = () => {

  const history = useHistory();

    function goToLigne(id) {
      return history.push(`/livre/${id}/lignes`);
    }
    const goToAddLigne =(id) => {
      history.push(`/livre/${id}/ligne/new`);
  }

  const [choix, setChoix] = useState({
    livre:""
  });


  const [livres, setLivres] = useState([]);

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
  ;

  return (
    <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
        <form className="j-pro">
         
          <div className="j-content">
            <Select  
                id="livre" 
                name="livre" 
                label="ANNEE" 
                onChange={handleChange}
            >
              {livres.map(livre => 
              <option key={livre.id} value={livre.id}> 
                {livre.anneeRef}
              </option>
              )}
            </Select>
          </div>
         
          <div className="j-footer">
            <button className="btn btn-primary" onClick={() => goToAddLigne(document.getElementById("livre").selectedIndex+1)}>
              Ajouter Ligne
            </button>
            <button className="btn btn-secondary m-r-50"  onClick={() => goToLigne(document.getElementById("livre").selectedIndex+1)}> 
              Consulter Ligne
            </button>
          </div>
           
        </form>
      </div>
    </div>
  );
};
export default ChoixLivre;