import { useParams } from 'react-router-dom'

const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    const anecdote = anecdotes.find(n => n.id === Number(id)) 
    return (
      <div>
        <h2>{anecdote.content}</h2>
        <div>by: {anecdote.author}</div>
      </div>
    )
  }

export default Anecdote