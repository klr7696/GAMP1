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
            <div className="d-flex" id="wrapper">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Header/>
                    <Content/>
                </div>
            </div>
            </BrowserRouter>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));