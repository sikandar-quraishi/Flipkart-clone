import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchDetails,
  deleteDetail,
} from "../../redux/actions/productDetailActions";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import "./ListPage.css";

const ListPage = () => {
  const details = useSelector((state) => state.productDetails.details);
  const dispatch = useDispatch();

  const orderedDetails = details
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => {
    dispatch(fetchDetails());
  }, []);

  const renderedDetails = orderedDetails.map((detail) => {
    return (
      <article className="cart__box" key={detail.id}>
        <p>
          <TimeAgo timestamp={detail.date} />
        </p>
        <p>
          <PostAuthor userId={detail.userId} />
        </p>

        <h3>{detail.title}</h3>
        <p className="post-content">{detail.content}</p>
        <p className="post-content">{detail.contentm}</p>
      
        <Link to={`/detailpage/${detail.id}`} className="button muted-button">
            <button> View details</button>
        </Link>
        <button onClick={() => dispatch(deleteDetail(detail.id))}>
          Delete
        </button>
      </article>
    );
  });

  return (
    <div>
      <div className="listpage_container">{renderedDetails}</div>
    </div>
  );
};

export default ListPage;
