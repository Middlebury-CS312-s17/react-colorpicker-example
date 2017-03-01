import React, { Component } from 'react';
import './ColorPicker.css';

function LabeledSlider(props){
  return  (
    <div className="LabeledSlider">
      <input type="range" min="0" max="255" value={props.value} onChange={(event)=> props.valueChange(event.target.value)} /> <span>{props.value}</span>
    </div>
  );
}




class ColorPicker extends Component{
  constructor(){
    super();
    this.state={
      red: 0,
      green: 0,
      blue: 0
    };
  }

  render(){
    const divStyle = {
      background: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
    };

    return(
      <div>
        <div className="colorBox" style={divStyle}></div>
        <LabeledSlider value={this.state.red} valueChange={(value) => {this.setState({red: value})}} />
        <LabeledSlider value={this.state.green} valueChange={(value) => {this.setState({green: value})}} />
        <LabeledSlider value={this.state.blue} valueChange={(value) => {this.setState({blue: value})}} />
      </div>
    );
  }
}


export default ColorPicker;
