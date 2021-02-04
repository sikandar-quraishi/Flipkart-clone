import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDetail } from "../../redux/actions/productDetailActions";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const DetailList = () => {
  const [loading, setLoading] = useState(true);
  const details = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const orderedDetails = details
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  console.log("Detaail with users:", details);

  const renderedDetails = orderedDetails.map((detail) => {
    return (
      <article className="post-excerpt" key={detail.id}>
        <h3>{detail.title}</h3>
        <p className="post-content">{detail.content}</p>
        <p className="post-content">{detail.contentm}</p>
        <br />
        <h3>
          <PostAuthor userId={detail.user} />
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

  // const detailList = details.map((detail) => (
  //   <article className="post-excerpt" key={detail.id}>
  //     <h3>{detail.title}</h3>
  //     <p className="post-content">{detail.content}</p>
  //     <p className="post-content">{detail.contentm}</p>
  //     <br/>
  //     <h3>
  //     <PostAuthor userId={detail.user} />
  //     <TimeAgo timestamp={detail.date} />

  //     </h3>
  //     <br/>
  //     <Link to={`/detailpage/${detail.id}`} className="button muted-button">
  //       View details
  //     </Link>
  //     <button onClick={() => dispatch(deleteDetail(detail.id))}>Delete</button>
  //   </article>
  // ));

  return (
    <div>
      <div>
        {loading ? <div>Data Load...</div> : <div>My name is Sikandar</div>}
        <h2>Details</h2>
        {renderedDetails}
      </div>
    </div>
  );
};

export default DetailList;
