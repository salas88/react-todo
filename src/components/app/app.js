import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import AddNewItem from '../add-new-item';

import './app.css'

export default class App extends Component {

  maxId = 100;

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
   
  

  addItem = () => {
    this.setState(({todoDate}) => {

      let generateId = 100;
      const item = {
        label: 'Drink coffee', important: false, id: this.maxId++
      }
      
      const newArray2 = [
        ...todoDate, item
      ]

      return {
        todoDate: newArray2
      }

    })  
  }

  onToggleImportant = (id) => {
    console.log(`Important ${id}`)
  }

  onToggleDone = (id) => {
    console.log(`Done ${id}`)
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
        <TodoList todos={this.state.todoDate} 
          onDeleted={ this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}/>
        <AddNewItem addItem={this.addItem }/>
     </div>
     
    );
  }

}
