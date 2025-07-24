interface Todo {
    id: number;
    text: string;
}

let TODOS: Todo[] = [];

export function addTodo(text: string) {
    const todo = { id: Math.random(), text };
    TODOS.push(todo);

    return todo;
};

export function getTodo(id: number) {
    const todo = TODOS.find(todo => todo.id === id);

    if(!todo) {
        throw Error("No todo found!")
    }

    return todo;
}

export function getTodos() {
    return TODOS;
}

export function removeTodo(id: number) {
    TODOS = TODOS.filter(todo => todo.id !== id);
}

export function updateTodo(id: number, text: string) {
    const todo = getTodo(id);
    todo.text = text
}