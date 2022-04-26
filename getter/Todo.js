import fetch from 'node-fetch';
class Todo {
    static get getTodo() {
        delete this.getTodo;
        return "I want to do something ..." ;
    }
    get image() {
        // never initial value when we don't call that property.
        console.log("image getter calls");
        return "This is image";
    }
    get getOneTodo() {
        return fetch("https://jsonplaceholder.typicode.com/todos/1")
                .then(res => res.json())
                .catch(err => console.log(err));
    }
    get getListTodo() {
        return (async() => {
            try {
                return await fetch("https://jsonplaceholder.typicode.com/todos")
                    .then(res => res.json())
                    .catch(err => console.log(err));
            } catch (error) {
                console.error(err);
            }
        })();
    }
}


(async() => {
    const todo = new Todo();
    const data = await todo.getListTodo;
    console.log(data);
})();