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

  const [tasks, setTasks] = useState(defaultTasks)
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
             />
        ))}
      </TaskList>
      <TaskButton />      
   </>
  );
}

export default App;