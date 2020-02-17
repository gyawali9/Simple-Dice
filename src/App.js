import React from "react";

class Dice extends React.Component{

  state={
    dice:["one", "two", "three", "four", "five","six"],
    defaultDice:"one"
  }
     handleShowhide=() =>{
     let random = Math.floor(Math.random()*this.state.dice.length);
     console.log(random)
     this.setState({defaultDice:this.state.dice[random]});
        };
         render()
     {
        return(
                
                <div className="mx-auto">           

                     <i className={`fas fa-dice-${this.state.defaultDice}`}></i>
                     <button type="submit" onClick={this.handleShowhide} >ROll </button>
                </div>
                     
        )
    }
}

export default Dice;