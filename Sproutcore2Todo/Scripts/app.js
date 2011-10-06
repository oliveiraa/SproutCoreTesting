Todos = SC.Application.create();

Todos.Todo = SC.Object.extend({
    title: null,
    isDone: false
});

Todos.todosController = SC.ArrayProxy.create({
    content: [],

    createTodo: function(title){
        var todo = Todos.Todo.create({ title: title });
        this.pushObject(todo);
    }
});

Todos.CreateTodoView = SC.TextField.extend({
    insertNewline: function () {
        var value = this.get('value');

        if (value) {
            Todos.todosController.createTodo(value);
            this.set('value', '');
        }
    }
});

