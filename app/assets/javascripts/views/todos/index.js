TodoApp.Views.TodosIndex = Backbone.View.extend({

  template: JST['todos/index'],
  
  events: {
    'submit #new_todo': 'createTodo'
  },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.appendTodo, this);
  },
  
  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(todo) {
      this.appendTodo(todo);
    }, this);
    return this;
  },
  
  createTodo: function(event) {
    event.preventDefault();
    todo_name = $('#new_todo_name').val();
    if (todo_name) {
      this.collection.create({name: todo_name, state: 'incomplete'});
      $('#new_todo')[0].reset();
    }
  },
  
  appendTodo: function(todo) {
    var view = new TodoApp.Views.Todo({ model: todo });
    $('#todos').append(view.render().el);
  }
});
