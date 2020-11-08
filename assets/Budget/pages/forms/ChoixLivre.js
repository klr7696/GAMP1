import React from "react";
import Field from "./Field";

const ChoixLivre = () => {
  return (
    <div className="page-wrapper">
      <div className="page-body button-page">
        <div className="row">
          <button
            type="button"
            className="btn btn-primary waves-effect"
            data-toggle="modal"
            data-target="#large-Modal"
          >
            Créer
          </button>
          <div
            className="modal fade"
            id="large-Modal"
            tabIndex={-5}
            role="dialog"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Voulez-vous importer une nomenclature existante?
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                <select className="custom-select">
                <option selected="">importation</option>
                <option value="1">2001</option>
                <option value="2">2008</option>
                <option value="2">2018</option>
              </select>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default waves-effect "
                    data-dismiss="modal"
                  >
                    Non
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Oui
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="styleSelector"></div>
        </div>
      </div>
    </div>
  );
};

export default ChoixLivre;
