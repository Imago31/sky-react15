import { useState, useEffect } from 'react'

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState('')
  const { text, id } = data

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  return (
    <form onSubmit={null} className="comments-item ">
      <div onClick={null} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComment
