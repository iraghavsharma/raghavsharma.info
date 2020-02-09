import React, { Component } from "react"

class Anchor extends Component{
    
    render(){
        var attrs = {}
            for(let attr in this.props){
                attrs[attr] = this.props.attr; 
            }
        return (       
            <a {...attrs}>{this.props.value}</a>
        )
    }
}

export default Anchor