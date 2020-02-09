import React, { Component } from "react"

class InputAtom extends Component{
    
    render(){
        var attrs = {}
            for(let attr in this.props){
                attrs[attr] = this.props.attr; 
            }
        return (       
            <input {...attrs}></input>
        )
    }
}

export default InputAtom