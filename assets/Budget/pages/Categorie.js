import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Pagination } from "../components/Pagination";
import CategoriesAPI from "../services/categorieAPI";
import { Field } from "./forms/Field";


export const CategorieAdd = ({match, history}) => {
  const {id="new"} = match.params;

  const [categorie, setCategorie] = useState({
    nomCat: "",
    abreviationCat: "",
  });

  const [errors, setErrors] = useState({
    nomCat: "",
    abreviationCat: "" 
  });

  
  const [editing, setEditing] = useState(false);

  const fetchCategorie = async id => {
    try {
      const {nomCat, abreviationCat} = 
      await CategoriesAPI.find(
        id
      );
      setCategorie({nomCat, abreviationCat});
    }catch (error) {
      history.replace("/categories/liste");
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchCategorie(id);
    }
  }, [id]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCategorie({ ...categorie, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editing) {
        await CategoriesAPI.update(id, categorie);
        toast.success("Catégorie modifié");
      } else {
        await CategoriesAPI.create(categorie);
        toast.error("Catégorie Ajouté");
        history.replace("/categories/liste")
      }
     setErrors({});
    } catch ({response}) {
      const  {violations} = response.data;

      if (violations) {
        const apiErrors = {};
        violations.forEach(({propertyPath, message}) => {
          apiErrors[propertyPath] =message;
        });

        setErrors(apiErrors);
        toast.error("Erreur");
      }
    }
  };

  return (
    <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
        {(!editing && <h3>Création de catégories de ligne</h3>) || (
          <h3>Modification de catégories de ligne</h3>
        )}
        <form onSubmit={handleSubmit} className="j-pro">
              <Field
                label="DENOMINATION"
                type="text"
                name="nomCat"
                placeholder="nom de la catégorie"
                value={categorie.nomCat}
                onChange={handleChange}
                error={errors.nomCat}
              />
              <Field
                label="ABREVIATION"
                name="abreviationCat"
                type="text"
                className="form-control form-control-uppercase"
                placeholder="ABR CAT"
                maxLength="10"
                value={categorie.abreviationCat}
                onChange={handleChange}
                error={errors.abreviationCat}
              />
          {/* end /.content */}
          <div className="j-footer">
            <button type="submit" className="btn btn-primary">
              Ajouter
            </button>
          </div>
          {/* end /.footer */}
        </form>
      </div>
    </div>
  );
};

export const CategorieList = () => {

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

const fetchCategories = async () =>{
  try {
    const data = await CategoriesAPI.findAll();
    setCategories(data);
    toast.success("Chargé Avec succès");
  } catch (error) {
    toast.error("erreur de chargement");
    console.log(error);
  }
};

useEffect(() => {
  fetchCategories();
}, []);

const handleDelete = async id => {
  const originalCategories = [...categories];
  setCategories(categories.filter(categorie => categorie.id !== id));

  try {
    await CategoriesAPI.delete(id)
    toast.info("Catégorie supprimée");
  } catch (error) {
    setCategories(originalCategories);
    toast.info("Catégorie non supprimée");
  } 
 
}

const handlePageChange = page => {
  setCurrentPage(page);
}

const handleSearch= ({currentTarget}) =>{
  setSearch(currentTarget.value);
  setCurrentPage(1);
}
const itemsPerPage = 6;

const filteredCategories = categories.filter(
  c => 
  c.nomCat.toLowerCase().includes(search.toLowerCase()) ||
  c.abreviationCat.toLowerCase().includes(search.toLowerCase())
);

const paginatedCategories = Pagination.getData(
  filteredCategories,
  currentPage,
  itemsPerPage
);

  return (
    <div className="control-pane">
      <div className="control-section">
      <div className="card">
        <div className="col-md-8">
            <div className="card-header">
              <h2>Liste des catégories de ligne</h2>
            </div>
              <div className="dt-responsive table-responsive">
              <div className="card-block">
                <div className="form-group">
                  <input
                  type="text"
                  onChange={handleSearch}
                  value={search}
                  className="form-control"
                  placeholder="Rechercher ..."
                  />
                </div>
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Nomination</th>
                      <th>Abreviation</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedCategories.map(categorie => (
                      <tr key={categorie.id}>
                        <td>{categorie.nomCat}</td>
                        <td>{categorie.abreviationCat}</td>
                        <td className="text-center">
                          <button className="m-r-35 text-muted"><i className="icofont icofont-ui-edit" /></button>
                          <button 
                            onClick={()=> handleDelete(categorie.id)}
                          ><i className="icofont icofont-delete-alt" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
{itemsPerPage < filteredCategories.length && (
  <Pagination
  currentPage={currentPage}
  itemsPerPage={itemsPerPage}
  length={filteredCategories.length}
  onPageChanged={handlePageChange}
  />
)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
