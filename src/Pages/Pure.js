import React from 'react';
import { PureComponent } from 'react';
import '../App.css';

export default class Pure extends PureComponent
{
constructor(props){
    super(props);
    this.state={
        count: 0,
    }
}

onSameState=()=>{
    this.setState({count : 0});
}
onIncrement=()=>{
    this.setState({count: this.state.count + 1})
}
    render(){
        console.log("Pure Component Loaded");
        return(
            <div>
                <h1>Pure component</h1>
                Count: {this.state.count}
                <p>Note: Rerenders component only when there is a difference between current and previous state/props! </p>
                <button onClick={this.onSameState}>Same State</button>
                <button onClick={this.onIncrement}>Increment</button>
                
            
            </div>

        )

    }



}
