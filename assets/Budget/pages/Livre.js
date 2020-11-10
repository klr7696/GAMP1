import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="form-group row">
        {livres.map((livre) => (
          <div key={livre.id} className="col-md-12 col-lg-4">
            <div className="card card-block">
              <div className="text-center">
                <i className="feather icon-book text-c-lite-green d-block f-40" />
                <h4 className="m-t-20">
                  <span className="text-c-lite-green">{livre.anneeRef}</span>
                </h4>
                <p className="m-b-20">{livre.decretLivre}</p>
                <p className="m-b-20 m-r-50"> Compte : {livre.nombreCompte}</p>
                <button className="m-r-15 btn btn-primary btn-sm btn-round">
                  <i className="feather icon-delete" />
                </button>
                <a
                  type="button"
                  href="#/comptes/liste"
                  className="m-r-15 btn btn-primary btn-sm btn-round"
                >
                  <i className="feather icon-list" />
                </a>
                <a
                  type="button"
                  href="#/compte"
                  className="btn btn-primary btn-sm btn-round"
                >
                  <i className="feather icon-edit" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
