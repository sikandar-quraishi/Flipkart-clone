import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDetail } from "../../redux/actions/productDetailActions";


export class detailPage extends Component {

  componentDidMount(){
    debugger
      this.props.fetchDetail(this.props.match.params.Id)
  }

  
  render() {
    debugger
    console.log("Props",this.props)
    return (
      <div>
        Single Page
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return { singleDetal: state.productDetails.details[ownProps.match.params.Id]}
  
}



export default connect(mapStateToProps, { fetchDetail })(detailPage)
