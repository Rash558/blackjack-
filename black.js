
let player={
  name:"Rash",
  chip:100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")



function getrandomCard(){
  return Math.floor(Math.random()*13)+1
}

function startgame(){
  isAlive=true
  hasBlackJack=false 
  let firstCard = getrandomCard()
  let secondCard =getrandomCard()
  sum = firstCard + secondCard
  cards = [firstCard,secondCard]
  rendergame()
}
function rendergame(){
  isAlive=true
  if(sum<=20){
    message = ("Do you want to draw another card?")
    isAlive=true
  }
  else if(sum===21){
    message = ("You have a blackjack")
    hasBlackJack = true
    playerEl.textContent=player.name+": $"+player.chip
  }
  else{
    message = ("You are out of the game")
    isAlive = false
  }
  messageEl.textContent=message
  sumEl.textContent="sum:"+sum
  cardEl.textContent="Cards: "
  
  for(let i=0; i< cards.length; i++){
    cardEl.textContent+=cards[i]+" "
  }
}

function newcard(){
  
  if(isAlive===true && hasBlackJack===false){
  let card=getrandomCard() 
  sum+= card
  cards.push(card)
  rendergame()
  }
}

let playerPrize =()=> {
  if(hasBlackJack) {
    playerEl.textContent=player.name+": $"+player.chip
  }else {
    playerEl.textContent=""
  }
}