describe("Todo", function() {
  it("should return true when the task is completed", function() {
    var todo = new TodoApp.Models.Todo({ state: 'completed' });
    
    expect(todo.isCompleted()).toBe(true);
  });
  
  it("should toggle its state", function() {
    var todo = new TodoApp.Models.Todo({ state: 'incomplete' });
    todo.toggle();
    expect(todo.isCompleted()).toBe(true);
    
    todo.toggle();
    expect(todo.isCompleted()).toBe(false);
  });
});
