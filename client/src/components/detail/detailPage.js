import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DetailPage = ({ match }) => {
  const { Id } = match.params;


  const detail = useSelector((state) =>
    state.productDetails.find((detail) => detail.id === Id)
  );

  

  console.log("detailPage:", detail);

  if (!detail) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{detail.title}</h2>
        <p className="post-content">{detail.content}</p>
        <p className="post-content">{detail.contentm}</p>
        <Link to={`/detaileditpage/${detail.id}`} className="button">
          Edit detail
        </Link>
        <Link to="/">Home</Link>
      </article>
    </section>
  );
};

export default DetailPage;
