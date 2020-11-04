import React , { Component } from 'react';
import ReactDom from 'react-dom';
import Sidebar from "./Budget/components/Sidebar";
import Header from "./Budget/components/Header";
import Content from './Budget/components/Content';
import Load from "./Budget/components/Load";


class App extends Component {
    render() {
        return (
        <div>
           <Load/>
            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                    <div className="pcoded-container navbar-wrapper">
                        <Header/>
                        <div className="pcoded-main-container">

                            <Sidebar/>  
                            <Content/>

                        </div>
                </div>
            </div>
        </div>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));