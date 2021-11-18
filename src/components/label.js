import react, { Component } from "react";
class Label extends Component{
    render(){
    return(
        <div className="label">
            <br></br>
            <label>Name: {this.props.name} </label>
            <br></br>
            <label>Age: {this.props.age}</label>
            <br></br>
            <label>Address: {this.props.address} </label>
            <br></br>
            <br></br>
        </div>

    );

}
}
export default Label
