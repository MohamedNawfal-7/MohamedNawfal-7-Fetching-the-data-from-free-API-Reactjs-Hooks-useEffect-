import React from 'react';
class Reacteventhandler extends React.Components{
  constructor(){
    super();
      this.state = {mywebsite:"hello guys"}
  }
  render(){
    return <h1>{this.state.mywebsite}</h1>
  }
}
export default Reacteventhandler
 