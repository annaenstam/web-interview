import { getAllTodoLists, updateTodoList } from '../models/TodoList.js'
import { isValidTodoListId } from '../utils/validation.js'

export const httpGetAllTodoLists = async (request, response) => {
  try {
    response.status(200).json(getAllTodoLists())
  } catch (err) {
    response.status(500).json({ message: err.message })
  }
}

export const httpUpdateTodoList = async (request, response) => {
  try {
    const {
      body,
      params: { id },
    } = request
    if (!isValidTodoListId(id)) {
      response.status(400).json({ message: 'Bad Request. Invalid format of todo list id' })
    }
    response.status(200).json(updateTodoList(id, body))
  } catch (err) {
    response.status(500).json({ message: err.message })
  }
}
