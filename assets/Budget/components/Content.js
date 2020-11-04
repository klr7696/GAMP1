import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import { CategorieAdd, CategorieList } from "../pages/Categorie";
import { Home } from "../pages/Home";
import { LivreAdd, LivreList } from "../pages/Livre";
import { Compte, CompteList } from "../pages/Compte";


class Content extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            
              <div id="styleSelector"></div>
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/livre" component={LivreAdd} />
                  <Route path="/livres/liste" component={LivreList} />
                  <Route path='/compte' component={Compte} />
                  <Route path='/comptes/liste' component={CompteList} />
                  <Route path='/categorie' component={CategorieAdd} />
                  <Route path='/categories/liste' component={CategorieList} />
                </Switch>
              </main>
            </div>
        </div>
      </div>
      </HashRouter>
    );
  }
}
export default Content;
