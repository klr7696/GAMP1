import React,{useState, useEffect} from "react";
import axios from 'axios';


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
          <div className="card">
            <div className="card-block text-center">
              <i className="feather icon-book text-c-lite-green d-block f-40" />
              <p className="m-b-20">{livre.id}</p>
              <h4 className="m-t-20"><span className="text-c-lite-green">2001</span></h4>
              <p className="m-b-20">Decret n12xx/bf/2020</p>
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
