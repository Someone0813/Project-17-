let playing = false
let timeremaining;
let score;
let x;
let y;
let z; let z1; let choiceRandom;
 
document.getElementById('startReset').onclick = function(){
  if(playing==true){
  
    location.reload()
  }else{
  
    playing = true;
    hide("gameover")
    show("timeremaining")
    document.getElementById('startReset').innerHTML = "Reset Game"
   score= 0;

   document.getElementById('scorevalue').innerHTML= score
   timeremaining=60
   countdown()
   generateQA()
  }
}

function countdown(){
  let countdown = setInterval(function(){

    if(timeremaining>0){
      timeremaining--;
    document.getElementById('timeremainingvalue').innerHTML=timeremaining
    }else{

      stopcountdown()
      show("gameover")
      document.getElementById('startReset').innerHTML = "Start Game"
      document.getElementById("gameover").innerHTML = "<p> GAME IS OVER</p><br><p>YOUR SCORE IS "+score +"</p>"
      playing = false
    }
  },1000)
}

function stopcountdown(){
  clearInterval(countdown)
}

function generateQA(){
 
  x = Math.round(1+Math.random()*9)
 
  y = Math.round(1+Math.random()*9)
  
  z = x * y
  document.getElementById("question").innerHTML = x + '&times;' + y

  choiceRandom = Math.round(1+Math.random()*3)
  document.getElementById('box'+choiceRandom).innerHTML = z
  let wronganwsers = [z]
  for(let i= 1;i<5;i++){

   do{
    x = Math.round(1+Math.random()*9)
    y = Math.round(1+Math.random()*9)
    z1 = x * y
   }
   while(wronganwsers.indexOf(z1)>-1)
   wronganwsers.push(z1)
  if(i!= choiceRandom){
    document.getElementById('box'+i).innerHTML = z1 
  }
  } 
}

for(let i=1;i<5;i++){
  document.getElementById("box"+i).onclick = function(){
   
    if(playing == true){
       if(this.innerHTML==z){
     
         show("correct")
         hide("wrong")
         setTimeout(function(){
          hide("correct")
         hide("wrong") 
         },1000)
         score++
         document.getElementById('scorevalue').innerHTML= score
         generateQA()
       }
       else{
       
         hide("correct")
         show("wrong")
         setTimeout(function(){
          hide("correct")
         hide("wrong") 
         },1000)
         generateQA()
       }
    }
  }
}

function show(id){
  document.getElementById(id).style.display="block"
}

function hide(id){
  document.getElementById(id).style.display="none"
}
