let startButton=document.getElementById('startQuiz')
let quizTime=60 
let questionNumber=0

let questions=[{
  // chane question 1 and choices to q/a and then add if statements for right/wrong
  question: 'question 1',
  options: ['choice one','choice two'],
  answer: 'choice one'
},{
  question: 'question 2',
  options: ['choice three','choice four'],
  answer: 'choice three'
}]
function startTimer(){


let timer=setInterval(function(){
if(quizTime>0){
  quizTime=quizTime-1;
  document.getElementById('time').innerHTML=quizTime
}else{
  clearInterval(timer)
}
},1000)
}

function startQuiz(){
  let currentQuestion=questions[questionNumber]

  let quizDiv=document.createElement('div')


  let questionDiv=document.createElement('div')
  questionDiv.innerHTML=currentQuestion.question;
  quizDiv.append(questionDiv)

  for (i=0;i<currentQuestion.options.length;i++){
    let optionButton= document.createElement('button')
    optionButton.innerHTML=currentQuestion.options[i]
    optionButton.addEventListener('click',function(event){
      event.preventDefault()
      document.getElementById('quizQuestion').innerHTML=""
      questionNumber=questionNumber+1;
      startQuiz()
    })
    quizDiv.append(optionButton)
  }

  document.getElementById('quizQuestion').append(quizDiv)
 
}

function init(event){
  event.preventDefault();
  startTimer()
  startQuiz()
}
startButton.addEventListener('click',init)