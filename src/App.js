import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import initialAnecdotes from './initialAnecdotes'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const App = () => {
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes)
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const padding = {
    paddingRight: 5
  }

  window.history.replaceState(null, '')


  return (
    
      <Router>
      <h1>Software anecdotes</h1>
      <Notification notification={notification}/>
        <div>
          <Link to='/anecdotes' style={padding}>anecdotes</Link>
          <Link to='/create' style={padding}>create new</Link>
          <Link to='/about' style={padding}>about</Link>
        </div>
  
        <Routes>
          <Route path='/' element={<AnecdoteList anecdotes={anecdotes}/>} />
          <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes}/>} />
          <Route path='/anecdotes/:id' element={<Anecdote anecdotes={anecdotes}/>} />
          <Route path='/create' element={<CreateNew addNew={addNew} setNotification={setNotification}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>

  )
}

export default App
