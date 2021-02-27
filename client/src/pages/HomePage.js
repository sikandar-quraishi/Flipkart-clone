import React from 'react';
import NavBar from '../components/NavBar';
import DetailList from '../components/detail/detailList'
import DetailForm from '../components/detail/detailForm'

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <DetailForm/>
            <DetailList/>
        </div>
    )
}

export default HomePage
