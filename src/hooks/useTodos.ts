import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../App';
import jsonServerInstance from '../api/api';

export default function useTodos() {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodo,
    initialData: [],
  });

  const { mutate: addTodo } = useMutation({
    mutationFn: addTodoMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const { mutate: toggleCompleteTodo } = useMutation({
    mutationFn: toggleCompleteTodoMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const { mutate: deleteTodo } = useMutation({
    mutationFn: deleteTodoMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { todos, addTodo, toggleCompleteTodo, deleteTodo };
}

async function fetchTodo(): Promise<Todo[]> {
  try {
    const response = await jsonServerInstance.get<Todo[]>('/todos');
    return response.data;
  } catch (error) {
    throw new Error('error occurred in fetching data');
  }
}

async function addTodoMutation(newTodo: Todo) {
  try {
    await jsonServerInstance.post<Todo>('/todos', newTodo);
  } catch (error) {
    throw new Error('error occurred in adding data');
  }
}

async function toggleCompleteTodoMutation({ id, isDone }: Partial<Todo>) {
  try {
    await jsonServerInstance.patch(`/todos/${id}`, { isDone });
  } catch (error) {
    throw new Error('error occurred in updating data');
  }
}

async function deleteTodoMutation(id: string) {
  try {
    await jsonServerInstance.delete(`/todos/${id}`);
  } catch (error) {
    throw new Error('delete todo error');
  }
}
