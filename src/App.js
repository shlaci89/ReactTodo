import './App.css';
import TodoState from "./context/todoContext/TodoState";
import Todos from "./components/todo/Todos";



function App() {
  return (
    <div className="container">
      <div className="App">
        <TodoState>
          <div>
            <Todos />
          </div>
        </TodoState>
      </div>
    </div>
  );
}

export default App;
