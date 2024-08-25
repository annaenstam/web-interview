let todoLists = new Map()

todoLists.set('0000000001', {
  id: '0000000001',
  title: 'First List',
  todos: [
    { description: 'First todo of first list!', completed: false },
    { description: 'Second todo of first list!', completed: true },
  ],
})
todoLists.set('0000000002', {
  id: '0000000002',
  title: 'Second List',
  todos: [{ description: 'First todo of second list!', completed: false }],
})

export const getAllTodoLists = () => {
  return Object.fromEntries(todoLists.entries())
}

export const updateTodoList = (id, todos) => {
  todoLists.set(id, { ...todoLists.get(id), todos })
  return todoLists.get(id)
}
