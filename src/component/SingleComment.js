import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { commentDelete } from '../redux/actions'
import { commentUpdate } from '../redux/actions'

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState('')
  const { text } = data

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  const dispatch = useDispatch()
  
  const deleteHandler = (e) => {
    dispatch(commentDelete(e.target.parentElement.remove()))
  }

  const updateHandler = (e) => {
    dispatch(commentUpdate(e.target.value = ''))
  }
  

  return (
    <form onSubmit={null} className="comments-item ">
      <div onClick={deleteHandler} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} onClick={updateHandler}/>
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComment
