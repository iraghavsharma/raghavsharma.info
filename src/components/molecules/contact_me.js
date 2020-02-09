import React, { Component } from "react"

class ContactMe extends Component{
    render(){
        var scopeName= "contact-us";
        return(
            <div className={scopeName}>
                <div class={scopeName + "__name"}>
                    <span className="name">Name</span>
                    <input id="name" type="text"></input>
                </div>
                <div class={scopeName + "__email"}>
                    <span for="email">Email</span>
                    <input id="email" type="text"></input>
                </div>
                <div class={scopeName + "__comments"}>
                    <span for="comments">Comments</span>
                    <input id="comments" type="textarea"></input>

                </div>
            </div>
        )
    }
}

export default ContactMe