

/*
  In our first version of the LabeledSlider, the slider maintains its own
  state. This allows us to see the simple component in action.
  */
// class LabeledSlider extends React.Component {
//   constructor(){
//     super();
//
//     this.state = {
//       value: 0
//     };
//   }
//
//   render() {
//     return React.createElement('div', null,
//         React.createElement('input', {type:'range',
//           min:0,
//           max:255,
//           value: this.state.value,
//           onChange: (event)=> this.setState({value: event.target.value})}),
//         React.createElement('span', null, this.state.value));
//   }
//
// }




/*
  In this version of LabeledSlider, we have pushed the state up to the ColorPicker.
  */
// class LabeledSlider extends React.Component {
//
//   render() {
//     return React.createElement('div', null,
//         React.createElement('input', {type:'range',
//           min:0,
//           max:255,
//           value: this.props.value,
//           onChange: (event)=> this.props.onChange(event)}),
//         React.createElement('span', null, this.props.value));
//   }
//
// }


/*
  Since the LabeledSlider is now stateless, we can convert it to a
  "functional component", which we implement with a simple function
  instead of using a class.

  As I said in class, it is important that this function is a pure one (i.e., no reliance on external state and no side effects -- the return value is purely a property of the arguments to the function).
  */
function LabeledSlider(props){
  const inputProps = {type:'range',
    min:0,
    max: 255,
    value: props.value,
    onChange: (event)=> {props.valueChange(event.target.value) }};

  return React.createElement('div', null,
    React.createElement('input', inputProps,null),
    React.createElement('span', null, props.value));
}



class ColorPicker extends React.Component{
  constructor(){
    super();

    this.state = {
      red:0,
      green:0,
      blue:0
    };
  }
  render(){
    const displayProps = {
      style:{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        background: `rgb(${this.state.red},${this.state.green},${this.state.blue} )`
      }
    };

    return React.createElement('div', null,
      React.createElement('div', displayProps, null),
      React.createElement(LabeledSlider, {value:this.state.red, valueChange: (value)=>{this.setState({red:value})}}, null),
      React.createElement(LabeledSlider,{value:this.state.green, valueChange: (value)=>{this.setState({green:value})}}, null),
      React.createElement(LabeledSlider, {value:this.state.blue, valueChange: (value)=>{this.setState({blue:value})}}, null)
    );

  }

}









ReactDOM.render(

  React.createElement(ColorPicker, null, null),


  document.getElementById('root')
);
