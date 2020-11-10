import axios from "axios";
import React, {useState} from "react";


export const ChoixLivre = props => {

  const [choix, setChoix] = useState(
    { 
      anneeRef: ""
    }
   );
 
   const handleChange = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    setChoix ({ ...choix, [name]:value});
  };


 const handleSubmit = async event => {
   event.preventDefault(); 

   try{
    await axios.post("http://localhost:8000/api/livres", choix)
    .then(response => console.log(response));
   }catch (error) {
    console.log(error.response);
   }
   console.log(choix);
  };
 
 
  return (
      <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
      <div className="j-header">
        <h1>Choix de Nomenclature</h1>
    </div>
        <form onSubmit={handleSubmit}>

        <div className="form-group row">
                  <label className="col-sm-2 col-form-label">ANNEE</label>
                  <div className="col-sm-10">
                    <select
                      type="number"
                      className="form-control"
                      placeholder="Numéro"
                      value={choix.anneeRef}
                      onChange={handleChange}
                    />
                     <option value="">{choix.anneeRef}</option>
                  </div>
                </div>
          {/* end /.content */}
          <div className="card-footer text-right">
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
          </div>
          {/* end /.footer */}
        </form>
      </div>
    </div>
  );
};
