import React from "react";
import Field from "./forms/Field";
import Modal from "./Modal";

export const LivreAdd = () => {
    return (
        <div className="page-body">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header" />
  
              <div className="card-block">
                <form>
                  <Field
                    name="annee"
                    type="number"
                    label="Année"
                    placeholder="2016"
                  />
                  <Field
                    name="decretLivre"
                    type="text"
                    label="Décret"
                    placeholder="Décret du livre"
                  />
                  <div className="row">
                  <label className="col-sm-2 sub-title">Date d'adoption</label>
                    <div className="col-sm-4 col-xl-2 m-b-20">
                      <input className="form-control" type="date" name="dateOeuvre" />
                    </div>
                    <label className="col-sm-2 sub-title">Date de mise en Oeuvre</label>
                    <div className="col-sm-4 col-xl-2 m-b-20">
                      <input className="form-control" type="date" name="dateOeuvre"/>
                    </div>
                    
                  </div>
  
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label sub-title">Description</label>
                    <div className="col-sm-6">
                      <textarea
                        className="form-control"
                        id="descriptionLivre"
                        name="descriptionLivre"
                        placeholder="Description du livre"
                      />
                      <span className="messages" />
                    </div>
                  </div>
                  <Field
                  name="choixFichier"
                  type="file"
                  label="Fichier joint"
                />
  
                  <div className="form-group row">
                    <label className="col-sm-7 " />
                    <div className="col-sm-5">
                    <Modal/>      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
    };

export const LivreList = () => {
  return (
<div className="form-group row">
  
  <div className="col-md-12 col-lg-4">
    <div className="card">
      <div className="card-block text-center">
        <i className="feather icon-book text-c-lite-green d-block f-40" />
        <h4 className="m-t-20"><span className="text-c-lite-green">2001</span></h4>
        <p className="m-b-20">Decret n12xx/bf/2020</p>
        <button className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-delete"/></button>
        <button className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-list"/></button>
        <button className="btn btn-primary btn-sm btn-round"><i className="feather icon-edit"/></button>
      </div>
    </div>
  </div>   
  <div className="col-md-12 col-lg-4">
    <div className="card">
      <div className="card-block text-center">
        <i className="feather icon-book text-c-lite-green d-block f-40" />
        <h4 className="m-t-20"><span className="text-c-lite-green">2001</span></h4>
        <p className="m-b-20">Decret n12xx/bf/2020</p>
        <button className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-delete"/></button>
        <button className="m-r-15 btn btn-primary btn-sm btn-round"><i className="feather icon-list"/></button>
        <button className="btn btn-primary btn-sm btn-round"><i className="feather icon-edit"/></button>
      </div>
    </div>
  </div>   

</div>
  );
};
