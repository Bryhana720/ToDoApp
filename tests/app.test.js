const { addTask } = require('./app');

test('agrega una tarea a la lista', () => {
    let tasks = [];
    addTask(tasks, 'Estudiar');
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toBe('Estudiar');
});
