import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import { CategorieAdd } from "../pages/CategorieAdd";
import { CategorieList } from "../pages/CategorieList";
import { CompteAdd } from "../pages/CompteAdd";
import CompteList from "../pages/CompteList";
import Home from "../pages/Home";
import { LivreAdd } from "../pages/LivreAdd";
import { LivreList } from "../pages/LivreList";
import Modal from "../pages/Modal";

class Content extends React.Component {
  render() {
    return (
      <HashRouter>

              <main>
                <Switch>
                  <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                      <div id="styleSelector"></div>
                  <Route exact path="/" component={Home} />
                  <Route path="/livre" component={LivreAdd} />
                  <Route path="/livres/liste" component={LivreList} />
                  <Route path='/compte' component={CompteAdd} />
                  <Route path='/comptes/liste' component={CompteList} />
                  <Route path='/categorie' component={CategorieAdd} />
                  <Route path='/categories/liste' component={CategorieList} />
                  <Route path='/modal' component={Modal} />
                    </div>
                  </div>
                </Switch>
              </main>
      </HashRouter>
    );
  }
}
export default Content;
