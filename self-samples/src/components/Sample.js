import React, { Component } from 'react';
import logo from './../logo.jpeg';
import './../App.css';

class RahulShukla extends Component {
  state = {
    time:new Date().toString(),
    name:'Rahul'
  }
   constructor(){
     super();
    this.setState();
   }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>Welcome to JSLovers Meetup</h2>
        </div>
        <p className="App-intro">
          Sample Class Component created during JSLovers by&nbsp; 
          <input type="text" value={this.state.name} />
          <br/>
          <br/>{this.state.time}
        </p>
      </div>
    );
  }

  componentDidMount(){
    this.setInt=setInterval(() => {
      this.setState({
        time: new Date().toString()
      });
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.setInt);
  }
}

export default RahulShukla;
