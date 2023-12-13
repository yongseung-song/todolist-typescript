import { useState } from 'react';
import styled from 'styled-components';
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
    <StAppContainer>
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoListContainer todos={todos} setTodos={setTodos} />
    </StAppContainer>
  );
}

export default App;

const StAppContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;
