import React, { Component } from "react"
import mainHeaderStyles from "../styles/main_header.module.css"

class MainHeader extends Component {
    render(){
        return (
            <div className ={mainHeaderStyles.wrapper}>
                <h1>Always on the path to Learning something new!</h1>
            </div>
        )
    }
}

export default MainHeader