class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  
  //static function  is a public bathroom and astatic(normal) are private home bathrooms;                   
  static getWizardInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
//getter
  getWizardsAtEnd() {
    var wizardsAtEndRef = database.ref('wizardsAtEnd');
      wizardsAtEndRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }
//setter 
//setter function always take arguments;
  static updateWizardsAtEnd(rank) {
    database.ref('/').update({
      wizardsAtEnd: rank
    });
  }
}
