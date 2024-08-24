import express from 'express'
import { httpGetAllTodoLists } from '../controllers/todoList.js'

const router = express.Router()

router.get('', (request, response) => {
  httpGetAllTodoLists(request, response)
})

export default router
