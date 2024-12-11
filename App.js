import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
function App() {
  return (
    <>
    <div className="App">
    <h1>Welcome to my First React Todo-App</h1>

      
      <header className="App-header">
   <TodoList></TodoList>
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  </>
  );
}

export default App;
