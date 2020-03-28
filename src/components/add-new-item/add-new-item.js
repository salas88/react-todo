import React, { Component} from 'react';
import './add-new-item.css';

export default class AddNewItem extends Component {


    render() {

        const { addItem } = this.props;

        return (
            <div className="add-new-item d-flex">
                <input type="text" className="form-control " />
                <button type="button add-button"
                    className="btn btn-outline-secondary"
                    onClick={ addItem }>Add</button>
            </div>
        
        )
            
    }
}