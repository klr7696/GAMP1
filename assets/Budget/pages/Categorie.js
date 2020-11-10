import React, { useState, useEffect } from "react";
import axios from "axios";

export const CategorieAdd = (props) => {
  const [categorie, setCategorie] = useState({
    nomCat: "",
    abreviationCat: "",
  });

  const [errors, setErrors] = useState({ nomCat: "", abreviationCat: "" });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCategorie({ ...categorie, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/categories",
        categorie
      );
      console.log(response.data);
    } catch (error) {
      if (error.response.data.violations) {
        const apiErrors = {};
        error.response.data.violations.forEach((violation) => {
          apiErrors[violation.propertyPath] = violation.message;
        });
        setErrors(apiErrors);
      }
    }
  };

  return (
    <div className="col-sm-12">
      <div className="j-wrapper j-wrapper-640">
        <form onSubmit={handleSubmit} className="j-pro" id="j-pro">
          <div className="j-content">
            <div className="j-unit">
              <label className="j-label">DENOMINATION</label>
              <input
                type="text"
                name="nomCat"
                placeholder="nom de la catégorie"
                value={categorie.nomCat}
                onChange={handleChange}
                error={errors.nomCat}
              />
            </div>

            <div className="j-unit">
              <label className="j-label">ABREVIATION</label>
              <input
                name="abreviationCat"
                type="text"
                className="form-control form-control-uppercase"
                placeholder="ABR CAT"
                maxlength="10"
                value={categorie.abreviationCat}
                onChange={handleChange}
                error={errors.abreviationCat}
              />
            </div>

            <div className="j-response" />
          </div>
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((response) => response.data["hydra:member"])
      .then((data) => setCategories(data))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2>Liste des catégories de ligne</h2>
            </div>
            <div className="card-block">
              <div className="dt-responsive table-responsive">
                <table className="table table-hovered">
                  <thead>
                    <tr>
                      <th>Nomination</th>
                      <th>Abreviation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((categories) => (
                      <tr key={categories.id}>
                        <td>{categories.nomCat}</td>
                        <td>{categories.abreviationCat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  {
    /* const handleDelete = (id) => {
      const originalCategories = [...categories];

      setCategories(categories.filter((categorie) => categorie.id !== id));

      axios
          .delete("http://localhost:8000/api/categories/" + id)
          .then((response) => console.log("OK"))
          .catch((error) => {
              setCategories(originalCategories);
              console.log(error.response);
          });
  };*/
  }
};
