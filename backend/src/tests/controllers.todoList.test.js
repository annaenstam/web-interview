import { expect } from 'chai'
import request from 'supertest'
import express from 'express'
import todoListRoutes from '../routes/todoList.js'

describe('TodoList Controller Tests', () => {
  const app = express()
  app.use('/api/todo-lists', todoListRoutes)

  it('should respond with 200 and in memory todo lists', async () => {
    // act
    const response = await request(app).get('/api/todo-lists')

    // assert
    const expectedResponseBody = {
      '0000000001': {
        id: '0000000001',
        title: 'First List',
        todos: [
          { description: 'First todo of first list!', completed: false },
          { description: 'Second todo of first list!', completed: true },
        ],
      },
      '0000000002': {
        id: '0000000002',
        title: 'Second List',
        todos: [{ description: 'First todo of second list!', completed: false }],
      },
    }

    expect(response.status).to.equal(200)
    expect(JSON.stringify(response.body)).to.equal(JSON.stringify(expectedResponseBody))
  })

  it('given valid numeric todo list id, should respond with 200', async () => {
    // arrange
    const validTodoListId = '0000000001'

    // act
    const response = await request(app)
      .patch(`/api/todo-lists/${validTodoListId}`)
      .send(JSON.stringify([{ description: 'First todo of second list!', completed: false }]))

    // assert
    expect(response.status).to.equal(200)
  })

  it('given non numeric todo list id, should respond with 400', async () => {
    // arrange
    const nonValidTodoListId = 'nonValidId'

    // act
    const response = await request(app)
      .patch(`/api/todo-lists/${nonValidTodoListId}`)
      .send(JSON.stringify([{ description: 'First todo of second list!', completed: false }]))

    // assert
    expect(response.status).to.equal(400)
    expect(response.body.message).to.equal('Bad Request. Invalid format of todo list id')
  })
})
