window.TodoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new TodoApp.Routers.Todos();
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function(){
  TodoApp.init();
});
