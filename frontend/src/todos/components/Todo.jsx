import React, { useState } from 'react'
import { TextField, Button, Typography, Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const Todo = ({ todo, index, setTodos, todos }) => {
  const [completed, setCompleted] = useState(todo.completed)

  return (
    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ margin: '8px' }} variant='h6'>
        {index + 1}
      </Typography>
      <Checkbox
        checked={todo.completed}
        onChange={(event) => {
          setCompleted(event.target.checked)
          setTodos([
            // immutable update
            ...todos.slice(0, index),
            { ...todo, completed: event.target.checked },
            ...todos.slice(index + 1),
          ])
        }}
      />
      <TextField
        sx={{ flexGrow: 1, marginTop: '1rem' }}
        label='What to do?'
        value={todo.description}
        disabled={todo.completed}
        onChange={(event) => {
          setTodos([
            // immutable update
            ...todos.slice(0, index),
            { description: event.target.value, completed: completed },
            ...todos.slice(index + 1),
          ])
        }}
      />
      <Button
        sx={{ margin: '8px' }}
        size='small'
        color='secondary'
        onClick={() => {
          setTodos([
            // immutable delete
            ...todos.slice(0, index),
            ...todos.slice(index + 1),
          ])
        }}
      >
        <DeleteIcon />
      </Button>
    </div>
  )
}
