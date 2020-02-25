import links from "../assets/json/socialLinks.json"
import AtomLink from "./atoms/link"
import AtomButton from "./atoms/button"
import { Component } from "react";

class SocialLinksTray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.toggleState = this.toggleState.bind(this)
    };
    toggleState() {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        let link_list = links.map((links) => {
            return <AtomLink key = {links.id} {...links} />
        });
        if (this.state.show) {
            return ( <>
                <div className = {`social-links-tray link-for__social-overlay-tray`}>{link_list}</div> 
                        <AtomButton name = "Click me" onClick = {this.toggleState} id = "social-overlay-tray__button" / >
                </>
            );
        } else {
            return ( <>
                <AtomButton name = "Click me" onClick = {this.toggleState} id = "social-overlay-tray__button" / >
                </>    
            )
        }
    }
};

export default SocialLinksTray;