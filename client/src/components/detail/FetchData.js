import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchDetail } from '../../redux/actions/productDetailActions'

 const FetchData = (props, {match}) => {
    const { fetchId } = match.params

    useEffect(()=>{
        // props.fetchDetail(Id)
    },[])
    console.log('Fetch Sengle D:>>', fetchId)
    return (

        <div>
            Hi, FetchData
        </div>
    )
}

const mapStateToProps = (state) => {
    return{ data: state.productDetails.details}
}

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, {fetchDetail})(FetchData)
