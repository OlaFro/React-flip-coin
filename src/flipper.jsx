import React, { Component } from 'react'
import Coin from "./coin"


export default class Flipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            flips: 0,
            randNum: null,
            heads: 0,
            tails: 0,
        }
    }

   flip = () =>{
       const random = Math.floor(Math.random()*2);
    
       this.setState(prevSt => {
        return{
        randNum: random,
        flips: prevSt.flips+1, 
        heads: prevSt.heads + (random === 1 ? 1 : 0),
        tails: prevSt.tails + (random === 0 ? 1 : 0)
        };
        
        // console.log(this.state.randNum);
    });
   };


    render() {
        return (
            <div>
                <h1>Flip the coin counter</h1>
                <Coin side={this.state.randNum} flips={this.state.flips}/>
                <button onClick={this.flip}>Flip me!</button>
                <p>Out of {this.state.flips} flips,  
                 {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}
