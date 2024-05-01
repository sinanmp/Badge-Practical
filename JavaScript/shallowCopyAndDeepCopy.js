// Original project object
const project = {
    name: 'Project A',
    tasks: [{ title: 'Task 1', dueDate: '2024-05-10' }, { title: 'Task 2', dueDate: '2024-05-15' }]
};

// Shallow copy using spread operator
const shallowCopy = { ...project };

// Modify the shallow copy
shallowCopy.name = 'Project B';
shallowCopy.tasks[0].title = 'Updated Task';

console.log(project); // Output: { name: 'Project A', tasks: [{ title: 'Updated Task', dueDate: '2024-05-10' }, { title: 'Task 2', dueDate: '2024-05-15' }] }
console.log(shallowCopy); // Output: { name: 'Project B', tasks: [{ title: 'Updated Task', dueDate: '2024-05-10' }, { title: 'Task 2', dueDate: '2024-05-15' }] }


// Deep copy using JSON.stringify and JSON.parse
const deepCopy = JSON.parse(JSON.stringify(project));

// Modify the deep copy
deepCopy.name = 'Project C';
deepCopy.tasks[0].title = 'New Task';

console.log(project); // Output: { name: 'Project A', tasks: [{ title: 'Updated Task', dueDate: '2024-05-10' }, { title: 'Task 2', dueDate: '2024-05-15' }] }
console.log(deepCopy); // Output: { name: 'Project C', tasks: [{ title: 'New Task', dueDate: '2024-05-10' }, { title: 'Task 2', dueDate: '2024-05-15' }] }
