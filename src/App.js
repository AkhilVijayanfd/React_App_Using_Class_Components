
import "./App.css";
import Textarea from './components/Textarea';
import Button from './components/Button';
import Label from './components/label';
import react, { Component } from "react";
import Message from './components/Message';
import Counter from "./components/counter";
class App extends Component {

  state = {
          name:"Akhilvijayan",
          age:"23",
          address: "Krishna nivas, Palode"
          };

    
  render(){
  return (
    <div>
      <Textarea/>
      <Label name={this.state.name} age={this.state.age} address={this.state.address}/>
      <Button/>
      <Counter/>
    </div>
  );
  }
}

export default App;
