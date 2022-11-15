import React, { Component } from 'react'
import "./App.css"
import Crud from './Components/Crud';
class App extends Component {
    render() {
        return (
            <div className="container">
                <Crud />
            </div>
        )
    }
}
export default App;