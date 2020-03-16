import React from 'react'
import ReactDom from 'react-dom'
import './header.scss'



class Header extends React.Component{
    constructor(props){
        super(props)
        this.menus = [
            {label: '设计'},
            {label: '文档'},
            {label: '组件'},
            {label: '资源'}
        ]
    }

    render(){
        return (
            <div className='header'>
                <div className="icon">
                    <a href="#">
                        <img src="" alt=""/>
                        chaos
                    </a>
                </div>
                <div className="menu">
                    <ul className="menu-item">
                        {
                            this.menus.map(item=>{
                                return <li key={item.label} className="options">{item.label}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount')
        document.onresize = function(e){
            console.log(e)
        }
    }
}

export default Header
// module.exports = Header