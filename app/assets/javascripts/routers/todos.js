TodoApp.Routers.Todos = Backbone.Router.extend({
  routes: {
    '': 'index',
    'todos/:id': 'show'
  },
  
  initialize: function() {
    this.todos = new TodoApp.Collections.Todos();
    this.todos.reset($('#todo_app').data('todos'));
  },
  
  index: function() {
    var todosIndexView = new TodoApp.Views.TodosIndex({ collection: this.todos });
    $('#todo_app').append(todosIndexView.render().el);
    
    var todoSearchView = new TodoApp.Views.TodoSearch({ collection: this.todos });
    $('#todo_app').append(todoSearchView.render().el);
  },
  
  show: function(id) {
    alert('show ' + id);
  }
});
