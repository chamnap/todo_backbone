TodoApp.Routers.Todos = Backbone.Router.extend({
  routes: {
    '': 'index',
    'todos/:id': 'show'
  },
  
  initialize: function() {
    this.todos = new TodoApp.Collections.Todos();
    this.todos.fetch();
  },
  
  index: function() {
    var view = new TodoApp.Views.TodosIndex({ collection: this.todos });
    $('#todo_app').html(view.render().el);
  },
  
  show: function(id) {
    alert('show ' + id);
  }
});
