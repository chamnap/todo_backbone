TodoApp.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  
  template: JST['todos/todo'],
  
  events: {
    'click li span': 'toggleCompleted'
  },
  
  initialize: function() {
    this.model.on('change:state', this.render, this);
  },
  
  render: function() {
    this.$el.html(this.template({todo: this.model}));
    this.$el.toggleClass('completed', this.model.isCompleted());
    return this;
  },
  
  toggleCompleted: function(event) {
    this.model.toggle();
  }
});
