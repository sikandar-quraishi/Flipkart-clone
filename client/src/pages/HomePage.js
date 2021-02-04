import React from 'react';
import NavBar from '../components/NavBar';
import DetailList from '../components/detail/detailList'
import DetailForm from '../components/detail/detailForm'
// import PostAuthor from '../components/detail/PostAuthor'

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <DetailList/>
            <DetailForm/>
            {/* <PostAuthor/> */}
        </div>
    )
}

export default HomePage
