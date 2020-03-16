import React from 'react'
import ReactDom from 'react-dom'
import Header from '../../components/header/header.jsx'
import Content from '../../components/content/content.jsx'


// import { connect } from 'react-redux'
// import { checkLoginStatus, editUserInfo, changeAsideStatus, changeCurrentOption, changePayStatus } from './../../redux/action'



// @connect(state=>state, { checkLoginStatus, editUserInfo, changeAsideStatus, changeCurrentOption, changePayStatus })
class Sdk extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return (
          <div>
            <Header/>
            <Content/>
          </div> 
      )
  }

  componentWillMount(){
    window.onresize = function(e){
      console.log(e.target.innerWidth)
    }
  }


}

export default Sdk