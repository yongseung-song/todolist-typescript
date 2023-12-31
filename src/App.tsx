import CardListContainer from './components/CardListContainer';
import Form from './components/Form';
import Header from './components/Header';

export type Todo = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isDone: boolean;
};
function App() {
  return (
    <>
      <Header />
      <Form />
      <CardListContainer />
    </>
  );
}

export default App;
