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
    var attributes = { name: $('#new_todo_name').val(), state: 'incomplete' };
    this.collection.create(
      attributes,
      {
        wait: true,
        success: function() {
          $('#new_todo')[0].reset();
        },
        error: this.handleError
      }
    );
  },
  
  appendTodo: function(todo) {
    var view = new TodoApp.Views.Todo({ model: todo });
    this.$('#todos').append(view.render().el);
  },
  
  handleError: function(todo, response) {
    if (response.status == 422) {
      var errors = $.parseJSON(response.responseText).errors;
      for(attribute in errors) {
        for(var i = 0; i<errors[attribute].length;i++) {
          alert(attribute + ' ' + errors[attribute][i]);
        }
      }
    }
  }
});

