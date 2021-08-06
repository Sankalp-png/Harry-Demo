class Game {
  constructor(){

  }
 //there are two types of functions- getters and setters;
 //this is a getter function
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  //this is a setter function
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    harry = createSprite(100,200);
    harry.addImage("Harry", harryImg);
    draco = createSprite(300,200);
    draco.addImage("Draco", dracoImg);
    wizards = [harry, draco];

  }

  play(){
    form.hide();
    
    Player.getWizardInfo();

    player.getWizardsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(ciel, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

    

      //x and y position of the cars
      var x = 175 ;
      var y;

      // this (in) is called for each loop
      //The for/in statement loops through the properties of an object.
      //The block of code inside the loop will be executed once for each property.

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        wizards[index-1].x = x;
        wizards[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("tomato");
          ellipse(x, y, 60, 60);

          wizards[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = wizards[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
class Game {
  constructor(){

  }
 //there are two types of functions- getters and setters;
 //this is a getter function
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  //this is a setter function
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    /*
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    */
    cars = [car1, car2];

  }

  play(){
    form.hide();
    
    Player.getWizardInfo();

    player.getWizardsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

    

      //x and y position of the cars
      var x = 175 ;
      var y;

      // this (in) is called for each loop
      //The for/in statement loops through the properties of an object.
      //The block of code inside the loop will be executed once for each property.

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("tomato");
          ellipse(x, y, 60, 60);

          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
