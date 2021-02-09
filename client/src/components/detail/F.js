import React, { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetail } from "../../redux/actions/productDetailActions";
import { selectDetailById } from '../../redux/reducers/rootReducer'


const DetailPage = ({ match }) => {
  const { Id } = match.params;

// const _detail = useSelector((state)=> selectById(state, Id))
debugger
  const _detail = useSelector((state) => state.productDetails.find((detail) => detail.id === Id));
  // const _detail = useSelector(state => selectDetailById(state, Id))
  // const post = useSelector(state => state.posts.find(post => post.id === postId))
  debugger
  const dispatch = useDispatch();

  // const  arrDetails = _detail.details;
  // console.log("SinglePage Data:", _detail );

  useEffect(()=>{
    dispatch(fetchDetail(Id))
},[])

  // if (!_detail) {
  //   return (
  //     <section>
  //       <h2>Post not found!</h2>
  //     </section>
  //   );
  // }

  return (
    <section>
      {/* <article className="post">
        <h2>{_detail.title}</h2>
        <p className="post-content">{_detail.content}</p>
        <p className="post-content">{_detail.contentm}</p>
        <Link to={`/detaileditpage/${_detail.id}`} className="button"> 
          Edit detail
         </Link>  */}
        <Link to="/">Home</Link>
      {/* </article> */}
    </section>
  );
};

export default DetailPage;
