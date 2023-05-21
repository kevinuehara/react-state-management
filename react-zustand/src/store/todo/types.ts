export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}
