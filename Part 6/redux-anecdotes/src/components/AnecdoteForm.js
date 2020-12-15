import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleClick = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createAnecdote({
      content: content,
      votes: 0
    }))
    dispatch(setNotification('Successfully created new note', 5))
  }

  return (
  <div>
    <h2>create new</h2>
      <form onSubmit = {handleClick}>
        <div><input name = 'anecdote'/></div>
        <button>create</button>
      </form>
  </div>
 )
}

export default AnecdoteForm