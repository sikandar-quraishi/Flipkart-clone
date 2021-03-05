import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDetail } from "../../redux/actions/productDetailActions";
import { nanoid } from "nanoid";


const DetailList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentm, setContentm] = useState("");
  const [userId, setUserId] = useState("");
  const [fileInput, setFileInput] = useState([]);
  const [genderInputRadio, setGenderInputRadio] = useState("")
  const [numberInput, setNumberInput] = useState(1)
  const [checkBoxInput, setCheckBoxInput] = useState(null)

  const [multipleCheckBoxInput, setMultipleCheckBoxInput] = useState([])




  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);


  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onContentmChanged = (e) => setContentm(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const handleFile = (e) => { setFileInput(e.target.files[0]);
    console.log("this is file:", e.target.files[0]);
  };
  const handleGender  = (e) => setGenderInputRadio(e.target.value)
  
  const handleNumberInput = (e) => setNumberInput(e.target.value);

  const handleCheckBoxInput = (e) => {
    setCheckBoxInput(!checkBoxInput)
    console.log("Single Checkbox:", !checkBoxInput);
  }

  const handleMultipleCheckBox = (e) => {
    let multipleValue = multipleCheckBoxInput;
    multipleValue.push(e.target.value)
    setMultipleCheckBoxInput(multipleValue)
    console.log("Multiple Checkbox:", multipleValue);

  }
    

  

  const onSavePostClicked = () => {
    // const data = new FormData();
    // data.append("id", nanoid());
    // data.append("title", title);
    // data.append("content", content);
    // data.append("contentm", contentm);
    // data.append("userId", userId);
    // data.append("fileInput", fileInput);
    // data.append("date", new Date().toISOString());
    let data = {
      id: nanoid(),
      title: title,
      content: content,
      contentm: contentm,
      userId: userId,
      fileInput: fileInput,
      genderInputRadio: parseInt(genderInputRadio),
      numberInput: numberInput,
      checkBoxInput:checkBoxInput,
      multipleCheckBoxInput:multipleCheckBoxInput,
      date: new Date().toISOString(),
    }
    if (title && content && contentm && userId && fileInput ) {
      dispatch(createDetail(data));

      setTitle("");
      setContent("");
      setContentm("");
      setUserId(""); 
      setFileInput("") 
    }
    console.log("Data:>", data)
    console.log("fileInput:>", fileInput)

  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(contentm) && Boolean(userId) && Boolean(fileInput);




  // const options = [
  //   { key: '0',  value: 1 },
  //   { key: '1',  value: 2 },
  //   { key: '2',  value: 3 },
  // ]

  return (
    <div>
      <h2>Add a New Article</h2>
      <form>
      <label htmlFor="postAuthor">Author:</label>
        <select id="author" name="author" value={userId} onChange={onAuthorChanged}>
          <option value="">Author</option>
          {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
          ))}
        </select>
        <label htmlFor="postTitle">Title:</label>
        <textarea
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onTitleChanged}
        />
        
        <label htmlFor="postContent">SubTitle:</label>
        <textarea
          type="text"
          id="subtitle"
          name="subtitle"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postContent">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={contentm}
          onChange={onContentmChanged}
        />
        <br/>
        <label htmlFor="postContent">File Upload:</label>
        <input onChange={handleFile} type="file" name="file" id="file"/>

        {/* <div onChange={handleGender}> */}
        <input type="radio"  checked={genderInputRadio === "0"} onChange={handleGender} value="0" name="gender" /> Male
        <input type="radio" checked={genderInputRadio === "1"} onChange={handleGender} value="1" name="gender" /> Female
        <input type="radio" checked={genderInputRadio === "2"} onChange={handleGender} value="2" name="gender" /> Other
        {/* </div> */}

        <input type="number" id="number" name="number"  value={numberInput}  onChange={handleNumberInput} pattern="[0-9]*" style={{border: "2px solid"}} />
        <input type="checkbox" defaultChecked={checkBoxInput}  onChange={handleCheckBoxInput} />


        <div>Multiple CheckBox</div>
        <input type="checkbox" onChange={handleMultipleCheckBox} id="vehicle1" name="vehicle1" value="Bike "/>
        <input type="checkbox" onChange={handleMultipleCheckBox} id="vehicle2" name="vehicle2" value="Car" />
        <input type="checkbox" onChange={handleMultipleCheckBox} id="vehicle3" name="vehicle3" value="Boat" />
        <input type="checkbox" onChange={handleMultipleCheckBox} id="vehicle4" name="vehicle4" value="Bmw" />
        <input type="checkbox" onChange={handleMultipleCheckBox} id="vehicle5" name="vehicle5" value="Honda" />



        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailList;
