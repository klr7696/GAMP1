import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Field } from './forms/Field';
import { ColumnDirective, ColumnsDirective, Filter, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';

export const CategorieAdd = props => {

 const [categorie, setCategorie] = useState(
   { nomCat: "",
      abreviationCat: ""
  }
  );

const handleSubmit = (event) => {  event.preventDefault(); console.log(categorie);}


 const handleChange = ({currentTarget}) => {
   const {name, value} = currentTarget;
   setCategorie({ ...categorie, [name]: value });
 };

    return ( 
        <div className="page-body card">
              <div className="card-block">
                <form>
                  <Field
                    name="nomCat"
                    label="Dénomination"
                    placeholder="Nom"
                    value={categorie.nomCat}
                    onChange={handleChange}
                  />
                  <Field
                    name="abreviationCat"
                    label="Abreviation"
                    placeholder="ABR CAT"
                    value={categorie.abreviationCat}
                    onChange={handleChange}
                  />
  
                  <div className="">
                      <button type="submit" className="btn btn-primary m-b-0">
                        Ajouter
                      </button>
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

    return (
      
  <div className='control-pane'>
    <div className='control-section'>
    <div className='col-md-12'>
    <div className="card-header">
      <h4>Liste des catégories de ligne</h4>
    </div>
       <TreeGridComponent dataSource={categories}
        height='400' allowPaging='true' allowFiltering='true' 
       filterSettings={{ mode: 'Immediate', type: 'FilterBar' }}>
        <ColumnsDirective>
          <ColumnDirective field='nomCat' headerText='Dénomination' width='50'></ColumnDirective>
          <ColumnDirective field='abreviationCat' headerText='Abreviation' width='40'></ColumnDirective>
          <ColumnDirective headerText='Action' width='30'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Filter, Page]}/>
      </TreeGridComponent>
    </div>
   </div>
    </div>
    );

  

 {/* const handleDelete = (id) => {
      const originalCategories = [...categories];

      setCategories(categories.filter((categorie) => categorie.id !== id));

      axios
          .delete("http://localhost:8000/api/categories/" + id)
          .then((response) => console.log("OK"))
          .catch((error) => {
              setCategories(originalCategories);
              console.log(error.response);
          });
  };*/}

};