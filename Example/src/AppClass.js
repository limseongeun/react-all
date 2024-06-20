import React, { Component } from 'react'
import Boxclass from './component/Boxclass';

const choice = {
  rock: {
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissors: {
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CV_vEes-oBpJ803bUU-4L9LXTLhZ18WVuA&s"
  },
  paper: {
    name:"Paper",
    img:"https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/a4_ivory_card_/.jpg"
  }
}

export default class AppClass extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userSelect: null,
      computerSelect: null,
      userStatus: "",
      computerStatus: "",
      result: "",
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    let userStatusValue = this.judgement(choice[userChoice], computerChoice);

    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      userStatus: userStatusValue,
      computerStatus: this.judgementComputer(userStatusValue),
      result: this.final(userStatusValue),
    });
    // setUserSelect(choice[userChoice]);
    // let computerChoice = randomChoice();
    // setComputerSelect(computerChoice);
    // let userStatusValue = judgement(choice[userChoice], computerChoice);
    // setUserStatus(userStatusValue);
    // setComputerStatus(judgementComputer(userStatusValue));
    // setResult(final(userStatusValue));
  };

  final = (userVal) => {
    if(userVal === "TIE") {
      return "TIE";
    } else if(userVal === "WINNER") {
      return "WIN";
    } else if(userVal === "LOSER") {
      return "LOSE";
    }
  }

  judgementComputer = (userResult) => {
    if(userResult === "TIE") {
      return "TIE";
    } else if (userResult === "WINNER") {
      return "LOSER";
    } else if (userResult === "LOSER") {
      return "WINNER";
    }
  }

  judgement = (user, computer) => {
    if(user.name === computer.name) {
      return "TIE"
    } else if(user.name === "Rock") {
      return computer.name === "Scissors" ? "WINNER" : "LOSER";
    } else if(user.name === "Scissors") {
      return computer.name === "Paper" ? "WINNER" : "LOSER";
    } else if(user.name === "Paper") {
      return computer.name === "Rock" ? "WINNER" : "LOSER";
    }
  }

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 배열로 만들어 주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length); // 소수점 이하 버리는 함수
    let final = itemArray[randomItem];

    return choice[final];
  }

  render() {
    return (
      <div>
        <h2>Class components Type</h2>
        <div className='main'>
          <Boxclass title="You" item={this.state.userSelect} status={this.state.userStatus} activeClass={this.state.userStatus.toLowerCase()} />
          <Boxclass title="Computer" item={this.state.computerSelect} status={this.state.computerStatus} activeClass={this.state.computerStatus.toLowerCase()} />
        </div>
        <div className='button-group'>
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
        <div className='result'>{this.state.result}</div>
      </div>
    )
  }
}
