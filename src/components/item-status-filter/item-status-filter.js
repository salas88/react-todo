import React, { Component } from 'react';
import './item-status-filter.js';
import { render } from 'react-dom';


export default class ItemStatusFilter extends Component{

   
     

    render(){

        let aa = 'btn btn-outline-secondary';
        return (
            <div className="btn-group active">
                <button type="button"
                className={aa} 
                >All</button>
                <button type="button"
                  className= {aa}>Active</button>
                <button type="button"
                  className={aa}>Done</button>
            </div>
        );
    }
}

