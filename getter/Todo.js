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
}

const todo = new Todo();