import express from 'express'
import { httpGetAllTodoLists, httpUpdateTodoList } from '../controllers/todoList.js'

const router = express.Router()

router.get('', (request, response) => {
  httpGetAllTodoLists(request, response)
})

router.patch('/:id', (request, response) => {
  httpUpdateTodoList(request, response)
})

export default router
