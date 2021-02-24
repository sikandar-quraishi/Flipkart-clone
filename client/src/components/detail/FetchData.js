import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDetail } from "../../redux/actions/productDetailActions";


export class detailPage extends Component {

  componentDidMount(){
    // debugger
      this.props.fetchDetail(this.props.match.params.id)
  }

  
  render() {
    // debugger
    console.log("Props", this.props)
    return (
      <div>
        Fetch Data
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  return { singleDetal: state.productDetails.item[ownProps.match.params.id] }
  
}



export default connect(mapStateToProps, { fetchDetail })(detailPage)
