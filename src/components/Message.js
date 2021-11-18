import react, { Component } from "react";
import Button from "./Button";

class Message extends Component {

  
    render(){
        return(
            <div>
                <h1>Message values</h1>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
export default Message;