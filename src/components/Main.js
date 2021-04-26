import React, { Component } from 'react';
import "../index.css";

export default class Main extends Component {
    render () {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Sort by name or use the search box</p>
            </div>
        )
    }
}