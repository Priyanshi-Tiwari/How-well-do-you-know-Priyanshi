var readlineSync=require('readline-sync')

var userName=readlineSync.question("Please enter your name:\n");

console.log("\n\nHi! "+userName+"\nWelcome to How well do you know Priyanshi?\n")

var highScore={
  first:'\nPriyanshi scored 4\n',
  second:'Shreeya scored 3\n'
}

var score=0;


var questionOne={
  question: "\nWhere is my hometown?\n",
  answer:"raipur"
}

var questionTwo={
  question:'\nWho is my favorite superhero?\n',
  answer:'batman',

}

var questionThree={
  question:"\nWhich is my favorite song?\n",
  answer:"believer"
}

var questionFour={
  question:"\nWhat is my dream company?\n",
  answer:"neogcamp"
}

var questionFive={
  question:"\nWhat is my favorite color?\n",
  answer:"blue"
}

var question=[questionOne,questionTwo,questionThree,questionFour,questionFive];

function play(question,answer){
    var userAns=readlineSync.question(question);
    if (userAns===answer){
      console.log("You are right!\n");
      score=score+1;
    }
    
    else{
      console.log('You are wrong!\n');
    }

    
  }



for(i=0;i<question.length;i++){

   play(question[i].question,question[i].answer);
   console.log("------------")
   
}
   console.log('Your score is '+score)
   console.log(highScore.first);
   console.log(highScore.second);
   console.log("If you have beaten their score send me a screenshot")
   console.log()
  
 