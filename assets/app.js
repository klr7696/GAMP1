import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from "./Budget/components/Sidebar";
import Header from "./Budget/components/Header";
import Load from "./Budget/components/Load";
import Content from './Budget/components/Content';


class App extends Component {
    render() {
        return (
        <>
           
            <div id="pcoded" className="pcoded">
        <div className="pcoded-container navbar-wrapper">
                        <Load/>
                        <Header/>
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <Sidebar/>  
                            <Content/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));