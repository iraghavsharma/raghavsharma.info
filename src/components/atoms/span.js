import React, { Component } from "react"

class SpanAtom extends Component{
    
    render(){
        var attrs = {}
            for(let attr in this.props){
                attrs[attr] = this.props.attr; 
            }
        return (       
            <span {...attrs}>{this.props.value}</span>
        )
    }
}

export default SpanAtom