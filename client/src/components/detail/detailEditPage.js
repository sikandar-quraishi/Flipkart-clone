import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PostAuthor from './PostAuthor';


import { updateDetail, fetchDetail } from "../../redux/actions/productDetailActions";


const DetailEditPage = ({ match }) => {
  const { Id } = match.params

  const detail = useSelector(state => state.productDetails.item.find(detail => detail.id === Id))

  
  const [title, setTitle] = useState(detail.title)
  const [content, setContent] = useState(detail.content)
  const [contentm, setContentm] = useState(detail.contentm)
  const [date, setDate] = useState(detail.date)
  const [userId, setUserId] = useState(detail.userId);




  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onContentmChanged = e => setContentm(e.target.value)


  useEffect(()=>{
    dispatch(fetchDetail(Id))
},[]) 

  console.log("Detail control:",  detail.title, detail.content, detail.contentm)

  // console.log("Edit detail >>", Id, detail.title)


 




// console.log("Target Value:", e.target.value)





  const onSavePostClicked = () => {
    if (title && content && contentm ) {
      dispatch(updateDetail({ id: Id, title, content, contentm, date, userId }))
      history.push(`/detailpage/${Id}`)
    }
    // console.log("cosole:",  title, content, contentm)

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