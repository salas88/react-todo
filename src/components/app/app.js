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
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Build awesome App'),
      this.createTodoItem('Drink Bear'),
    ],
    term: ''
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
   
  

  addItem = (text) => {

    const item = this.createTodoItem(text);

    this.setState(({todoDate}) => {
 
      const newArray = [
        ...todoDate, item
      ]

      return {
        todoDate: newArray
      }

    })  
  }

    createTodoItem(label) {

     return {
        label,
        important: false,
        done: false,
        id: this.maxId++
     } 
  }

  toggleProperty(arr, id, propName) {
    const indx = arr.findIndex(( el => el.id === id));
    const oldItem = arr[indx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, indx),
      newItem,
      ...arr.slice(indx + 1)
      ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoDate }) => {
  
      return {
        todoDate: this.toggleProperty(todoDate, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoDate }) => {
  
      return {
        todoDate: this.toggleProperty(todoDate, id, 'done')
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({ term});
  }

  search(items, term) {
    if(term.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase()
             .indexOf(term.toLowerCase()) > -1;
    })
  }
 
  render() {
    const { todoDate, term } = this.state;

    const doneCount = todoDate.filter((el) => el.done).length;
    const todoCount = todoDate.length - doneCount;
    const visibleItems = this.search(todoDate, term);

    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount}/>
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={this.onSearchChange}/>
        <ItemStatusFilter />
      </div>
        <TodoList todos={ visibleItems } 
          onDeleted={ this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}/>
        <AddNewItem addItem={this.addItem }/>
     </div>
     
    );
  }

}
