import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CompteList = () => {

  const [lignes, setLignes] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/livres/5/lignes?hierachieLigne=CHAPITRE")
    .then(response => response.data["hydra:member"])
    .then(data => setLignes(data));
  }, []);

  return ( 
    <div className="card">
    <div className="card-header">
      <h2>Liste des lignes budgétaires</h2>
    </div>
        <table className="table table-hover">
          <thead>
            <tr>
              
              <th>Numéro</th>
              <th>Libéllé</th>
              <th>Hierarchie</th>
              <th>Catégorie</th>
              <th>Nombre d'Article</th>
              
            </tr>
          </thead>
          <tbody>
          {lignes.map(ligne => 
            <tr key={ligne.id}>
              <td>{ligne.numeroLigne} </td>
              <td>{ligne.libelleLigne} </td>
              <td>{ligne.hierachieLigne} </td>
              <td>{ligne.categorieLigne.nomCat} </td>
              <td className="text-center">
              <span className="badge badge-primary">{ligne.articleNombre}</span>
              </td>   
            </tr>  
            )}
          </tbody>
        </table>
    </div>
   );
}
 
export default CompteList;