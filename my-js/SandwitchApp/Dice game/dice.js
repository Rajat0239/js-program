var count = parseInt(prompt("Enter the moves = "))
var score = parseInt(prompt("Enter the score = "))
var winningScore = 50
document.getElementById('score').innerText = score
document.getElementById('count').innerText = count
document.getElementById('btnRoll').addEventListener('click', (e)=>{
  var random =  Math.round(Math.random()*100)%6 + 1
  var imgUrl = `./${random}.png`

  document.getElementById('diceImg').src = imgUrl

  score -= random
  count--


  if( score <= 0){
      alert("Reached to Winning Score")
      score = 0
      count = 0
  }
  else if( count == 0 ){
      alert("You lost")
      score = 0
      count = 0
}

    document.getElementById('score').innerText = score
    document.getElementById('count').innerText = count

})
