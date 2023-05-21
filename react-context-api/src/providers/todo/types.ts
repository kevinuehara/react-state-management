export interface ITodo {
  id: number;
  label: string;
  done: boolean;
}

export interface TodoProviderState {
  todos: ITodo[];
  addTodo: (label: string) => void;
  removeTodo: (id: number) => void;
}
