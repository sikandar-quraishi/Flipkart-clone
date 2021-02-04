import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PostAuthor from './PostAuthor';

import { updateDetail } from "../../redux/actions/productDetailActions";


const DetailEditPage = ({ match }) => {
  const { Id } = match.params

  const detail = useSelector(state => state.productDetails.find(detail => detail.id === Id))
  console.log("user: Auter >>", detail)

  const [title, setTitle] = useState(detail.title)
  const [content, setContent] = useState(detail.content)
  const [contentm, setContentm] = useState(detail.contentm)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onContentmChanged = e => setContentm(e.target.value)


  const onSavePostClicked = () => {
    if (title && content && contentm ) {
      // debugger
      dispatch(updateDetail({ id: Id, title, content, contentm}))
      history.push(`/detailpage/${Id}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <PostAuthor userId={detail.user}/>

      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <textarea
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <textarea
          id="postContent"
          name="postContent"
          value={contentm}
          onChange={onContentmChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>



    </section>
  )
}

export default DetailEditPage;