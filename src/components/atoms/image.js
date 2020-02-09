import React, { Component } from "react"

class Image extends Component{
    
    render(){
        var attrs = {}
            for(let attr in this.props){
                attrs[attr] = this.props.attr; 
            }
        return (       
            <img {...attrs}/>
        )
    }
}

export default Image