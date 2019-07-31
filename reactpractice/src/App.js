import React, { Component } from "react";
import BoyCard from "./components/BoyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import boys from "./boys.json";

class App extends Component {
  // Setting this.state.boys to the boys json array
  state = {
    boys,
    pickedBoys: [],
    scoreCurrently: 0,
    highScore: 0
  };


  boyClick = id => {
    if(this.state.pickedBoys.includes(id)) {
      this.clickReset();
    } else {
      let arrayId = [];
      arrayId = this.state.pickedBoys;
      arrayId.push(id);
      this.setState({ pickedBoys: arrayId });
      console.log(this.state.pickedBoys);


      this.state.scoreCurrently <= this.state.highScore - 1
      ? this.setState({ scoreCurrently: this.state.scoreCurrently + 1 })
      : this.setState({
        scoreCurrently: this.state.scoreCurrently + 1,
        highScore: this.state.highScore + 1
      });

      let boyShuffle = this.state.boys;
      for (let i = boyShuffle.length - 1; i> 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [boyShuffle[i], boyShuffle[j]] =[
          boyShuffle[j],
          boyShuffle[i]
        ];
      }
      this.setState({boys:boyShuffle})

    }
  };



  clickReset = () => {
    this.setState({ pickedBoys: [], scoreCurrently: 0});
  };

  // Map over this.state.boys and render a BoyCard component for each boy object
  render() {
    return (
      <Wrapper>
        <Title>BTS Memory Game <br></br>
        Current Score = {this.state.scoreCurrently} <br></br>
        High Score = {this.state.highScore}
        </Title>
        {this.state.boys.map(boy => (
          <BoyCard
          boyClick={this.boyClick}
            id={boy.id}
            key={boy.id}
            name={boy.name}
            image={boy.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
