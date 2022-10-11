import React from 'react';
import {TaskCounter} from './components/taskCounter';
import {TaskSearch } from './components/taskSearch';
import {TaskList} from './components/taskList';
import {TaskItem} from './components/taskItem';
import {TaskButton} from './components/taskButton';
import './styles.css';  


const defaultTask = [
  {task:'Terminar curso de Angular y Node de Udemy', completed: true},
  {task:'Presentar examen LCSPC', completed: true},
  {task:'Leer modulos AZ-500', completed: false},
  {task:'Aprobar examen AZ-500', completed: true}
]

function App() {

  const [tasks, setTasks] = React.useState(defaultTask);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Estado inicial de nuestros TODOs
  
  return (
    <>

    <TaskCounter
    total={totalTasks}
    completed={completedTasks}
    />
    <TaskSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    <TaskList>
      {searchedTasks.map(task => (
            <TaskItem
              key={task.text}
              text={task.text}
              completed={task.completed}
      />
      ))}
    </TaskList>
    <TaskButton />
    </>
  );
}

export default App;
