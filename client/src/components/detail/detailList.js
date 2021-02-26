import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchDetails,
  deleteDetail,
} from "../../redux/actions/productDetailActions";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const DetailList = () => {
  const [ data, setData] = useState(false)
  const details = useSelector((state) => state.productDetails.details);
  const dispatch = useDispatch();

  const orderedDetails = details
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));




  useEffect(() => {
    // dispatch(fetchDetails());

    getData()
  }, []);

 const getData = () => {

  setTimeout(()=> { 
    setData(true)
    dispatch(fetchDetails());
  },500)
  
  setData(false)
 }


  if(!data){
    return(
      <div>Loading...</div>
    )
  }

  const renderedDetails = orderedDetails.map((detail) => {
    return (
      <article className="post-excerpt" key={detail.id}>
        <h3>{detail.title}</h3>
        <p className="post-content">{detail.content}</p>
        <p className="post-content">{detail.contentm}</p>
        <br />
        <h3>
          <PostAuthor userId={detail.userId} />
          <TimeAgo timestamp={detail.date} />
        </h3>
        <br />
        <Link to={`/detailpage/${detail.id}`} className="button muted-button">
          View details
        </Link>
        <button onClick={() => dispatch(deleteDetail(detail.id))}>
          Delete
        </button>
      </article>
    );
  });

  return (
    <div>
      <div>
      
        {renderedDetails}
        <h2>Details List</h2>
      </div>
    </div>
  );
};

export default DetailList;
