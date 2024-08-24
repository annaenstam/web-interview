let todoLists = new Map()

todoLists.set('0000000001', {
  id: '0000000001',
  title: 'First List',
  todos: ['First todo of first list!', 'Second todo of first list!'],
})
todoLists.set('0000000002', {
  id: '0000000002',
  title: 'Second List',
  todos: ['First todo of second list!'],
})

export const getAllTodoLists = () => {
  return Object.fromEntries(todoLists.entries())
}

export const updateTodoList = (id, todos) => {
  todoLists.set(id, { ...todoLists.get(id), todos })
  return todoLists.get(id)
}
