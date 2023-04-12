var startButton=document.getElementById('startQuiz')
var quizTime=60 
var questionNumber=0

var questions=[{

  question: 'What is used to create a variable?',
  options: ['variable','create','var','ver'],
  answer: 'var'
},{
  question: 'An array is a variable which can hold more than one ____?',
  options: ['number','letter','assignment','value'],
  answer: 'value'
},{
  question: '______ are used to perform different actions based on different conditions',
  options: ['arrays','conditional statements','strings','methods'],
  answer: 'conditional statements'
},{
  question: 'A string is written inside _____',
  options: ['quotes','brackets','exclamation points','parenthesis'],
  answer: 'quotes'
},{
  question: 'What can be used to find out if an expression is true or false?',
  options: ['random','string','boolean','value'],
  answer: 'boolean'
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