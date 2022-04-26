class Todo {
    static get getTodo() {
        delete this.getTodo;
        return "I want to do something ..." ;
    }
}

console.log(Todo.getTodo);