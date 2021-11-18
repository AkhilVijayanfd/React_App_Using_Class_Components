
import react,{ Component }from "react";
import Message from "./Message";
class Button extends Component {

    state= {
        message: "Please enter anything"
    };

    handleChange = () => {
        this.setState({
            message: "Successfully entered"
        });
    };


    render(){
    return(
        <div className="button">
        <br></br>
        <button onClick = {this.handleChange}>Change Value</button>
        <Message message={this.state.message}/>
        </div>
    );
    }
}
export default Button;