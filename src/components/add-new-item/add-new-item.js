import React, { Component} from 'react';
import './add-new-item.css';

export default class AddNewItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
           label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {

        const { addItem } = this.props;

        return (
            <form className="add-new-item d-flex" onSubmit={this.onSubmit}>
                <input type="text" className="form-control"
                placeholder="What needs to be done"
                onChange={ this.onLabelChange} 
                value={ this.state.label}/>
                <button type="button add-button"
                    className="btn btn-outline-secondary"
                    >Add</button>
            </form>
        
        )
            
    }
}