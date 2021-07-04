class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here...");
    this.input2 = createInput("Enter Correct Option No...");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(450, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(50, 100);
    this.option1.html("1: Everyone " );
    this.option1.position(50, 140);
    this.option2.html("2: Eye" );
    this.option2.position(50, 160);
    this.option3.html("3: Estimate " );
    this.option3.position(50, 180);
    this.option4.html("4: Example" );
    this.option4.position(50, 200);

    this.input1.position(50, 270);
    this.input2.position(300, 270);
    this.button.position(240, 370);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
