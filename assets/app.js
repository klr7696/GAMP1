import React , { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from "./Budget/components/Sidebar";
import Header from "./Budget/components/Header";
import Content from './Budget/components/Content';


class App extends Component {
    render() {
        return (
        <BrowserRouter>
           
            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                    <div className="pcoded-container navbar-wrapper">
                        <Header/>
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <Sidebar/>  
                            <Content/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));