import react, {useState} from "react";
import {TaskCounter} from "./components/taskCounter";
import {TaskSearch} from './components/taskSearch';
import {TaskList} from './components/taskList';
import {TaskItem} from './components/taskItem';
import {TaskButton} from './components/taskButton';
import './styles.css'
const defaultTasks = [
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {

    //localstorage values
    const localStorageTodos = localStorage.getItem('TASKS_V1');
    let parsedTasks;
  
    if (!localStorageTodos) {
      localStorage.setItem('TASKS_V1', JSON.stringify([]));
      parsedTasks = [];
    } else {
      parsedTasks = JSON.parse(localStorageTodos);
    }
    
  const [tasks, setTasks] = useState(parsedTasks)
  const [searchValue, setSearchValue] = useState('')

  //recorjerr el total de tasks conestado complete
  const taskCompleted = tasks.filter(task => !!task.completed).length
  const totalTask = tasks.length;

  let searchedTasks = [];

  //filtrar tasks por task ingresado
  if(!searchValue.length >=1){
    searchedTasks = tasks;
  }else{
    searchedTasks = tasks.filter(task =>{
      //get text to lowercase
      const taskLower = task.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskLower.includes(searchText);
    })
  }

  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveTasks = (newTasks) => {
    // Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTasks);
    // Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    // Actualizamos nuestro estado
    setTasks(newTasks);
  };

  //check task completed
  const completedTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTasks(newTasks);
  }; 

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };
  return (
   <>
      <TaskCounter
        completed = {taskCompleted}
        total = {totalTask} />    
      <TaskSearch
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
       />
      <TaskList>
        {searchedTasks.map(task => (
            <TaskItem
             key={task.text}
             text={task.text}
             status={task.completed}
             onCompleted={() => completedTask(task.text)}
             onDelete={() => deleteTask(task.text)}
             />
        ))}
      </TaskList>
      <TaskButton />      
   </>
  );
}

export default App;