import React, {useState} from 'react'
import './LivreCard.css';
import {Link, useHistory} from 'react-router-dom'
import LivresAPI from "../../services/LivreAPI";
import { toast } from "react-toastify";

const LivreCard = ({livre}) => {

    const [livres, setLivres] = useState([]);

    const history = useHistory();

    const goToLivre =(id) => {
        history.push(`/livre_${id}`);
    }
    
    const goToLigne =(id) => {
        history.push(`/livre/${id}/lignes`);
    }

    const goToAddLigne =(id) => {
        history.push(`/livre/${id}/ligne/new`);
    }

    const handleDelete = async id => {
        const originalLivres = [...livres];
        setLivres(livres.filter(livre => livre.id !== id));
      
        try {
          await LivresAPI.delete(id)
          toast.success("Livre supprimée");
        } catch (error) {
          setLivres(originalLivres);
          toast.error("Livre non supprimée");
        } 
       
      }

    return (

        <div class="col-xl-4 col-md-12">
        <div class="card bg-c-blue update-card">
            <div class="card-block" onClick={() => goToLivre (livre.id)} >
                <div class="row align-items-center">
                <div className="col-auto">
                    <i className="feather icon-book f-70 text-c-white social-icon"></i>
                    </div>
                    <div className="col">
                        <h4 className="m-b-0">{livre.anneeRef}</h4>
                        <p className="m-b-0">{livre.decretLivre}</p>
                        <p><small>{livre.nombreCompte}</small></p>
                    </div> 
                </div>
            </div>
            
            <div class="card-footer">
                    
                    <Link  title="Ajouter des lignes">
                        <i class="feather icon-plus f-30  m-r-25" onClick={() => goToAddLigne (livre.id)}/>
                    </Link>
                    <Link  title="Consulter les lignes" onClick={() => goToLigne (livre.id)}>
                        <i class="feather icon-list f-30 m-r-25"/>
                    </Link>
                    <Link  title="Supprimer le livre" onClick={()=> handleDelete(livre.id)}>
                        <i class="feather icon-trash f-30 m-r-25"/>
                    </Link>
                    <a>
                   
                    </a>
                    
            </div>
        </div>
    </div>
    
    );

}
 
export default LivreCard;