import React from 'react';
import { Component } from 'react'

export class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: '',
      inputValue2: '',
      inputValue3: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
      <h1>class component</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'red' }}>
        <input type="text" placeholder='Type smth it will be displayed on the board' name="inputValue1" value={this.state.inputValue1} onChange={this.handleInputChange} />
        <div style={{width: '600px',background: 'yellow', height: '600px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <input type="text" placeholder='Type smth it will be displayed on the board' name="inputValue2" value={this.state.inputValue2} onChange={this.handleInputChange} />
        <div  style={{background: 'royalblue', width: '400px', height: '400px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <input type="text" placeholder='Type smth it will be displayed on the board' name="inputValue3" value={this.state.inputValue3} onChange={this.handleInputChange} />
        <div style={{ background: 'blue', padding: '50px', border: '5px solid yellow', width: '200px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'gray', padding: '30px', border: '5px solid white', justifyContent: 'center' }}>
            <p>{this.state.inputValue1}</p>
            <p>{this.state.inputValue2}</p>
            <p>{this.state.inputValue3}</p>
          </div>
        </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}
