import "../style.css";
import React, { Component } from 'react'


class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value:null,
    }
  }
  state = {  }
  
  render() { 
    
    return (<div className="cell" onClick={()=>{ this.props.onClick() }}>{this.props.value}</div>  );
  }

  
}
 

export default Cell;
