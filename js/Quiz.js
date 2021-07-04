class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      question = new Question();
      question.display();
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
    }
  }

  play(){
    question.hide();
    background("yellow"); 
    textSize(50);
    text("---------------",408,80);
    text("Result of Quiz",430,60);
    Contestant.getContestantInfo();
    
    if(allContestants !== undefined){
      var pos = 350;
      fill("blue");
      textSize(30);
      text("*NOTE: Contestants who answered correct are highlighted in green colour!",100,310);
      for(var plr in allContestants){
         var correctAns = "2";
         if(correctAns === allContestants[plr].answer){
            fill("Green");

         }else {
          fill("red");
       }
       pos = pos+30;
       text(allContestants[plr].name+" => "+allContestants[plr].answer,250,pos);
      
      }

    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
