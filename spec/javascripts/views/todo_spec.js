describe("Todo", function() {
  beforeEach(function() {
    this.model = new TodoApp.Models.Todo({
      name: 'hello world1',
      state: 'completed'
    });
    this.view = new TodoApp.Views.Todo({ model: this.model });
    this.view.render();
  });
  
  it("return the view object back when rendering", function() {
    expect(this.view).toEqual(this.view);
  });
  
  it("render data from model", function() {
    expect(this.view.$el.text().trim()).toEqual(this.model.get('name'));
  });
  
  it("have css class 'completed'", function() {
    expect(this.view.$el).toHaveClass("completed");
  });
});
