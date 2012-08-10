TodoApp.Views.TodoSearch = Backbone.View.extend({
  tagName: 'aside',
  
  template: JST['todos/search'],
  
  events: {
    'submit #todo_search': 'searchTodo'
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  searchTodo: function(event) {
    event.preventDefault();
    this.collection.fetch({ data: { q: this.$('#todo_search_query').val() }});
  }
});
