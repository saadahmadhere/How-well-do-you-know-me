readlineSync = require('readline-sync')
chalk = require('chalk')

var userName = readlineSync.question("What is your name? ")

var questions = [{
question: "Where do I live? ",
answer: "ghazipur"},
{question: "What is my favorite superhero's name? ",
answer: "thor"},
{question: "Which is my dream country to visit? ",
answer: "greece"},
{question: "Which is my favourite sitcom? ",
answer: "breaking bad"},
{question: "What is the name of my favourite bike?",
answer: "duke"}]
score = 0
if(readlineSync.keyInYN(`\nHello ${userName}, do you know Saad?`)){
  
for(var i=0; i<questions.length; i++){
  var userAnswer = readlineSync.question(questions[i].question)
  if(userAnswer.toLowerCase() == questions[i].answer){
    score += 1
    console.log(chalk.green(`correct `))
  }else{
    console.log(chalk.red(`wrong `))
    score -= 1
  }
}
console.log(`Your score is: ${chalk.bgCyan(score)}`)
}

else{console.log("Thanks for showing up🙌")}
