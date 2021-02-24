import React, { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetail } from "../../redux/actions/productDetailActions";


const DetailPage = ({ match }) => {
  const { Id } = match.params;

  const _detail = useSelector((state) => state.productDetails.details.find((detail) => detail.id === Id));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchDetail(Id))
},[])

  if (!_detail) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{_detail.title}</h2>
        <p className="post-content">{_detail.content}</p>
        <p className="post-content">{_detail.contentm}</p>
        <Link to={`/detaileditpage/${_detail.id}`} className="button"> 
          Edit detail
         </Link> 
        <Link to="/">Home</Link>
      </article>
    </section>
  );
};

export default DetailPage;
