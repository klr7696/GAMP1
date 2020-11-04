import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import { CategorieAdd, CategorieList } from "../pages/Categorie";
import { Compte } from "../pages/Compte";
import { Filtering } from "../pages/CompteList";
import Home from "../pages/Home";
import { LivreAdd, LivreList } from "../pages/Livre";
import Modal from "../pages/Modal";

class Content extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div id="styleSelector"></div>
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/livre" component={LivreAdd} />
                  <Route path="/livre/liste" component={LivreList} />
                  <Route path='/compte' component={Compte} />
                  <Route path='/comptes/liste' component={Filtering} />
                  <Route path='/categorie' component={CategorieAdd} />
                  <Route path='/categories/liste' component={CategorieList} />
                  <Route path='/modal' component={Modal} />
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </div>
      </HashRouter>
    );
  }
}
export default Content;
