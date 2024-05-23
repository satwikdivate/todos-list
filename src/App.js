import './App.css';
import Header from './MyComponents/Header';
import  {Fotter}  from './MyComponents/Fotter';       //{ } used because it is javascript oobjects here name should also name as that function
import { Todo } from './MyComponents/Todo';    //{ } used because it is javascript objects here also name should same as that fucntion


function App() {
  return (
   <>
      <Header searchBar={true}/>
      <Todo/>
      <Fotter/>

    </>
    
  );
}

export default App;
