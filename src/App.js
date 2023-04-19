import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';
function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
