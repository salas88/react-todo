import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'

import './app.css'

export default class App extends Component {

  state = {
    todoDate: [
      { label: 'Drink coffee', important: false, id: 1},
      { label: 'Build awesome App', important: true, id: 2},
      { label: 'Drink Bear', important: false, id: 3}
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoDate}) =>{
      const indx = todoDate.findIndex(( el => el.id === id));
      
      const newArray = [
        ...todoDate.slice(0, indx),
        ...todoDate.slice(indx + 1)
      ]
      return {
        todoDate: newArray
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
        <TodoList todos = {this.state.todoDate} 
        onDeleted = { this.deleteItem }/>
    </div>
    );
  }

}
