const {fetchTodo} = require('./todos');

test('Fetching todo delectus aut autem with id 1',async ()=>{
    expect.assertions(1);

    const todo =await fetchTodo(1);
    expect(todo.title).toBe('delectus aut autem');
})