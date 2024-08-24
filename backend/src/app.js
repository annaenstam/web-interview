import express from 'express'
import cors from 'cors'
import todoListRoutes from './routes/todoList.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/todo-lists', todoListRoutes)

const PORT = 3001

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
