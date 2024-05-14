import './App.css';
import {ToDoList} from './ToDoList';
import image from './1.avif';
import imageTwo from './2.avif';

function App() {
  return (
    <div className='app'>
      <div className='container'> 
      <img  src={image} width="200px" alt="todolist"/>
      </div>
        <div className='container'>
        <h1>To do list</h1>
      </div>
      <ToDoList/>
      <div className='container'> 
      <img src={imageTwo} width="200px" alt="todolist"/>
      </div>
    </div>
  );
}

export default App;
