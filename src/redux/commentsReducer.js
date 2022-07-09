import { COMMENT_CREATE, COMMENT_LOAD } from './types'

const initialState = {
  comments: [],
}

export const commentsReducer = (state = initialState, action) => {
  console.log('comm  reducer>', action)

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      }

    case COMMENT_LOAD:
      const commentNew = action.data.map((comm) => {
        return {
          text: comm.name,
          id: comm.id,
        }
      })
      return {
        ...state,
        comments: commentNew,
      }
    default:
      return state
  }
}
