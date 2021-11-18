import react, { Component } from "react";

class Counter extends Component
{
    state = {
        counter: 0
    };

    onIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    onDecrement =() => {
        this.setState({
            counter: this.state.counter - 1
        });
    };
    render(){
        return(
            <div className="counter">
                <h2>Counter Value</h2>
                <h3>Current Value:  {this.state.counter}</h3>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>

        );
    }
}
export default Counter;