import React from 'react'
import ReactDom from 'react-dom'
import './content.scss'

class Content extends React.Component{
    constructor(props){
        super(props)
        this.mouseDown = this.mouseDown.bind(this)
        this.mouseUp = this.mouseUp.bind(this)
        this.mouseMove = this.mouseMove.bind(this)
        this.tag = null;
        this.canMove = false
    }

    render(){
        return (
            <div className="content" onMouseMove={this.mouseMove} onMouseUp={this.mouseUp} onMouseDown={this.mouseDown}>
                <div className="lt" ref="lt">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim amet pariatur cum laudantium ratione dolorem perspiciatis, fugit porro, itaque ex, voluptas aperiam natus accusantium quia est? Quam, natus. Id, commodi!
                </div>
                <div className="rt" ref="rt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est pariatur corporis quas deleniti, hic sit libero provident odit blanditiis? Aliquam delectus, sit dolorem maxime ab sed corporis porro ut!
                </div>
                <div className="lb" ref="lb">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error consectetur laudantium est similique soluta expedita quia odit, possimus optio cum! Eos obcaecati dicta magni aperiam esse eligendi nihil saepe!
                </div>
                <div className="rb" ref="rb">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi qui minus, facilis officia numquam eum cupiditate molestiae optio deleniti, enim facere ratione quidem id pariatur nemo unde nihil, hic soluta.
                </div>
                <div className="vertical" ref="ver" id="ver"></div>
                <div className="horizon" ref="hor" id="hor"></div>
            </div>
        )
    }


    mouseDown(){
        if(event.path[0].id !== 'ver' && event.path[0].id !== 'hor') return
        if(event.path[0].id == 'ver'){
            this.tag = 1
        } else {
            this.tag = 2
        }
        event.preventDefault()
        this.canMove = true
    }

    mouseMove(){
        if(event.clientY > 650) return
        if(this.canMove == true && this.tag == 1 ) {
            this.refs.ver.style.left = event.clientX + 'px'
            var percent = event.clientX / window.innerWidth * 100
            this.refs.lt.style.width = percent + '%';
            this.refs.lb.style.width = percent + '%';
            this.refs.rt.style.width = `calc(${100 - percent}% - 4px)`;
            this.refs.rb.style.width = `calc(${100 - percent}% - 4px)`;
        } else if (this.canMove == true && this.tag == 2){
            this.refs.hor.style.top = event.clientY - 50 + 'px';
            this.refs.lt.style.height = event.clientY - 50 + 'px';
            this.refs.rt.style.height = event.clientY - 50 + 'px';
            this.refs.lb.style.height = 600 - 4 - event.clientY + 50 + 'px';
            this.refs.rb.style.height = 600 - 4 - event.clientY + 50 + 'px';
        }
    }

    mouseUp(){
        this.canMove = false;
    }
}


export default Content