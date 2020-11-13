import React, {useState} from 'react'
import './LivreCard.css';
import {useHistory} from 'react-router-dom'

const LivreCard = ({livre, borderColor='#009688'}) => {

    const [color, setColor]= useState({});
    const history = useHistory();

   const showBorder = () => {
       setColor(borderColor);
   }

   const hideBorder = () => {
       setColor('#f5f5f5');
   }

    const goToLivre =(id) => {
        history.push(`/livres/${id}`);
    }
    

    return (
        <div className="col-lg-6" onClick={() => goToLivre (livre.id)}  onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal text-cent" style={{borderColor: color}}>
               <div className="card-stacked"> 
                <div className="card-content">
                <i className="feather icon-book text-c-lite-green d-block f-40" />
                    <p>{livre.anneeRef}</p>
                    <p>{livre.decretLivre}</p>
                    <p><small>{livre.nombreCompte}</small></p>
                     <button className="m-r-15 btn btn-primary btn-sm btn-round">
                  <i className="feather icon-delete" />
                </button>
                <a
                  type="submit"
                  type="button"
                  href="#/comptes/liste"
                  className="m-r-15 btn btn-primary btn-sm btn-round"
                >
                  <i className="feather icon-list" />
                </a>
                <a
                  type="button"
                  href="#/compte/new"
                  className="btn btn-primary btn-sm btn-round"
                >
                  <i className="feather icon-edit" />
                </a>
                </div>
               </div>
            </div>    
        </div>
    );

}
 
export default LivreCard;