import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { LivreAdd, LivreDetail, LivreList } from "../pages/Livre";
import { Compte, CompteList } from "../pages/Compte";
import { CategorieAdd, CategorieList } from "../pages/Categorie";
import ErrorPage from "../pages/ErrorPage";
import { ChoixLivre } from "../pages/ChoixLivre";


class Content extends React.Component {
  render() {
    return (
      <HashRouter>
      <main>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            
              <div id="styleSelector"></div>
            
                <Switch>
                <Route path="/livre" component={LivreAdd} />
                  <Route path="/livres/:id" component={LivreDetail} />
                  <Route path="/livres" component={LivreList} />
                  <Route path="/choix" component={ChoixLivre} />
                  <Route path='/compte/:id' component={Compte} />
                  <Route path='/livress/:id/comptes' component={CompteList} />
                  <Route path='/categorie/:id' component={CategorieAdd} />
                  <Route path='/categories/liste' component={CategorieList} />
                  <Route exact path="/" component={Home} />
                  <Route component={ErrorPage} />
                </Switch>             
            </div>
        </div>
      </div>
      </main>
      </HashRouter>
    );
  }
}
export default Content;
