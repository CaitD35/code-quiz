var startButton=document.getElementById('startQuiz')
var quizTime=60 
var questionNumber=0

var questions=[{
  // chane question 1 and choices to q/a and then add if statements for right/wrong
  question: 'question 1',
  options: ['choice one','choice two',],
  answer: 'choice one'
},{
  question: 'question 2',
  options: ['choice three','choice four'],
  answer: 'choice three'
},{
  question: 'question 3',
  options: ['choice five','choice six'],
  answer: 'choice three'
},{
  question: 'question 4',
  options: ['choice seven','choice eight'],
  answer: 'choice three'
},{
  question: 'question 5',
  options: ['choice nine','choice ten'],
  answer: 'choice three'
}]
function startTimer(){


var timer=setInterval(function(){
if(quizTime>0){
  quizTime=quizTime-1;
  document.getElementById('time').innerHTML=quizTime
}else{
  clearInterval(timer)
}
},1000)
}

function startQuiz(){
  var currentQuestion=questions[questionNumber]

  var quizDiv=document.createElement('div')


  var questionDiv=document.createElement('div')
  questionDiv.innerHTML=currentQuestion.question;
  quizDiv.append(questionDiv)

  for (i=0;i<currentQuestion.options.length;i++){
    var optionButton= document.createElement('button')
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