TodoApp.Models.Todo = Backbone.Model.extend({
  toggle: function() {
    if (this.get('state') === 'completed') {
      this.set('state', 'incomplete');
    }
    else {
      this.set('state', 'completed');
    }
    this.save();
  },
  
  isCompleted: function() {
    return this.get('state') === 'completed';
  }
});
