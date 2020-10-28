import React , { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                    <h1>Hello</h1>
            </div>
            </BrowserRouter>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));