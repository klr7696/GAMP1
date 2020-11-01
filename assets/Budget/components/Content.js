import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import { LivreAdd, LivreList } from '../pages/Livre';



class Content extends React.Component{
        render () {

            return(
      
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                      <div className="main-body">
                            <div className="page-wrapper">
                                  <div id="styleSelector">
                                  </div>
                  <Router>
                   <Switch>
                   <Route exact path='/' component={Home} />
                     <Route path='/livre' component={LivreAdd} />
                     <Route path='/livre/liste' component={LivreList} />
                   </Switch>
               </Router>
     
</div></div></div></div>

            )
        }
    }
export default Content;