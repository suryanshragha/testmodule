

const handOptions = {
    "rock": "icons8-fist-67 1.png",
    "paper": "icons8-hand-64 1.png",
    "scissors": "17911 1.png"
  }
  let SCORE=0;
  function rules() {
    document.getElementById("gamerules").style.display = "block";
  }
  
  function cross() {
    document.getElementById("gamerules").style.display = "none";
  }
  const pickhand =(hand) =>{
    console.log(hand);
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    if(hand=="ROCK"){
    document.getElementById("userid").src="icons8-fist-67 1.png";
    }
    if(hand=="PAPER"){
     document.getElementById("userid").src="icons8-hand-64 1.png";
    }
    if(hand=="SCISSORS") {
    document.getElementById("userid").src="17911 1.png";
  }
  pickcomputerhand();
}

  
const pickcomputerhand = () => {
    let hands = ["ROCK","PAPER","SCISSORS"]
    let cphand =hands[Math.floor(Math.random()*3)]
    console.log("cphand",cphand)
    document.getElementById("computerid").src=handOptions[cphand]
    if(cphand=="ROCK"){
        document.getElementById("computerid").src="icons8-fist-67 1.png";
        }
        if(cphand=="PAPER"){
         document.getElementById("computerid").src="icons8-hand-64 1.png";
        }
        if(cphand=="SCISSORS") {
        document.getElementById("computerid").src="17911 1.png";
      }
      referee(userHand,cphand);
  
};
const referee = (userHand, cphand) => {
    if (userHand == "paper" && cphand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cphand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "paper" && cphand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "rock" && cphand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "rock" && cphand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cphand == "rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cphand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cphand == "rock") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cphand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
  };
  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
  }
  function next(){
    document.getElementById("nextbtn").style.display = "block";
  }
  next();
