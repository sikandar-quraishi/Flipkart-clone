import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDetail } from "../../redux/actions/productDetailActions";
import { nanoid } from "nanoid";


const DetailList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentm, setContentm] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onContentmChanged = (e) => setContentm(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    let data = {
      id: nanoid(),
      title: title,
      content: content,
      contentm: contentm,
      userId: userId,
      date: new Date().toISOString(),
    }
    if (title && content && contentm && userId ) {
      dispatch(createDetail(data));

      setTitle("");
      setContent("");
      setContentm("");
      setUserId("");  
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(contentm) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <textarea
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postContent">Contentm:</label>
        <textarea
          id="postContentm"
          name="postContentm"
          value={contentm}
          onChange={onContentmChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailList;
