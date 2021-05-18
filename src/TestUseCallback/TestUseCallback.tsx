import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function TestUseCallback() {
  const [id, setId] = useState(1)

  return (
    <>
      <h1>Fetching data on mount with React.useCallback()</h1>
      <button onClick={() => setId((prev) => prev + 1)}>Render new Task</button>
      <TodoItem id={id} />
    </>
  )
}

const TodoItem = ({ id }: { id: number }) => {
  const [todo, setTodo] = useState<Todo>()

  const getTodo = useCallback(async () => {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    )
    return await request.json()
  }, [id])

  useEffect(() => {
    getTodo().then((fetchedTodo) => setTodo(fetchedTodo))
  }, [getTodo])

  const textDecoration = todo?.completed ? 'line-through' : 'none'

  return (
    <Styledtodo>
      {todo && <p style={{ textDecoration }}>{todo.title}</p>}
    </Styledtodo>
  )
}

const Styledtodo = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`
