import React, { Component } from "react"

class Button extends Component{
    
    render(){
        var attrs = {}
            for(let attr in this.props){
                attrs[attr] = this.props.attr; 
            }
        return (       
            <button {...attrs}>{this.props.value}</button>
        )
    }
}

export default Button