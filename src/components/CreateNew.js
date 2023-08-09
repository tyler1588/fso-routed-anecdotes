import { useNavigate } from 'react-router-dom'
import useField from '../hooks/useField'

const CreateNew = (props) => {
    const navigate = useNavigate()
    const { reset: resetContent, ...content } = useField('input')
    const { reset: resetAuthor, ...author } = useField('input')
    const { reset: resetInfo, ...info } = useField('input')

    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value, 
        info: info.value,
        votes: 0
      })
      props.setNotification(content.value)
      navigate('/anecdotes')
      setTimeout(() => {
        props.setNotification('')
      }, 5000)
    }

    const handleReset = () => {
      resetContent()
      resetAuthor()
      resetInfo()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content}/>
          </div>
          <div>
            author
            <input {...author}/>
          </div>
          <div>
            url for more info
            <input {...info}/>
          </div>
          <button>create</button>
          <button type="button" onClick={handleReset}>reset</button>
        </form>
      </div>
    )
}

export default CreateNew