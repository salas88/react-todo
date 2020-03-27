import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'

import './app.css'

const App = () => {

  const todoDate = [
    { label: 'Drink coffee', important: false, id: 1},
    { label: 'Build awesome App', important: true, id: 2},
    { label: 'Drink Bear', important: false, id: 3}
    
  ]

  return (
    <div className="todo-app">
    <AppHeader todo={1} done={3}/>
    <div className="top-panel d-flex">
    <SearchPanel />
    <ItemStatusFilter />
    </div>
    <TodoList todos = { todoDate} />
  </div>
  );
};

export default App;