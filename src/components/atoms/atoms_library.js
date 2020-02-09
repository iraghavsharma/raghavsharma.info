import React, {Component} from "react"
import InputAtom from "./input"
import SpanAtom from "./span"
import Anchor from "./anchor"
import Button from "./button"

class AtomLibrary extends Component{
    
    render(){
        return (       
            <section className="atom-library">
                    <div className="blank-space__medium"></div>
                    <h2>
                        Span Filed
                    </h2>
                    <div>
                        <SpanAtom value="Sample Text"/>
                    </div>
                    <hr/>
                    <h2>
                       Input Field 
                    </h2>
                    <div>
                        <InputAtom type="text" className="library-class"/>
                    </div>
                    <hr/>
                    <h2>
                        Anchor
                    </h2>
                    <div>
                    <Anchor href="/" value="Go to Homepage Button"/>
                    </div>
                    <hr/>
                    <h2>
                        Button
                    </h2>
                    <div>
                        <Button href="/" value="Go to Homepage Button"/>
                    </div>
                    <hr/>
                    <h2>
                        Image
                    </h2>
                    <div>
                        <img src="https://i.ebayimg.com/images/g/ljEAAOSwEzxYeaPm/s-l640.jpg" alt="Chelsea is the best"/>
                    </div>
                    <hr/>
            </section>
        );
    }
}

export default AtomLibrary