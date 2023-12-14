import { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoListContainer from './components/TodoListContainer';
export interface Todo {
  title: string;
  content: string;
  isDone: boolean;
  id: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);
  return (
    <>
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoListContainer todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
