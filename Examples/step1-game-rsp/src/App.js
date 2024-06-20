import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 로드맵
// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4번 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정)

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userStatus, setUserStatus] = useState("");
  const [computerStatus, setComputerStatus] = useState("");
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let userStatusValue = judgement(choice[userChoice], computerChoice);
    setUserStatus(userStatusValue);
    setComputerStatus(judgementComputer(userStatusValue));
    setResult(final(userStatusValue));
  };

  const final = (userVal) => {
    if(userVal === "TIE") {
      return "TIE";
    } else if(userVal === "WINNER") {
      return "WIN";
    } else if(userVal === "LOSER") {
      return "LOSE";
    }
  }

  const judgementComputer = (userResult) => {
    if(userResult === "TIE") {
      return "TIE";
    } else if (userResult === "WINNER") {
      return "LOSER";
    } else if (userResult === "LOSER") {
      return "WINNER";
    }
  }

  const judgement = (user, computer) => {
    // user == coumpter tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper user lose
    // user == scissors, computer == paper user win
    // user == scissors, computer == rock user lose
    // user == paper, computer == rock user win
    // user == paper, computer == scissors user lose

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

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 배열로 만들어 주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length); // 소수점 이하 버리는 함수
    let final = itemArray[randomItem];

    return choice[final];
  }

  return (
    <div>
      <h1>React-RockScissorsPaperGame</h1>
      <h2>Function components Type</h2>
      <div className='main'>
        <Box title="You" item={userSelect} status={userStatus} activeClass={userStatus.toLocaleLowerCase()} />
        <Box title="Computer" item={computerSelect} status={computerStatus} activeClass={computerStatus.toLocaleLowerCase()} />
      </div>
      <div className='button-group'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
      <div className='result'>{result}</div>
    </div>
  );
}

export default App;
