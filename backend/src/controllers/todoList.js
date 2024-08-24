import { getAllTodoLists } from '../models/TodoList.js'

export const httpGetAllTodoLists = async (request, response) => {
  try {
    response.status(200).json(getAllTodoLists())
  } catch (err) {
    response.status(500).json({ message: err.message })
  }
}
