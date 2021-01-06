class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster{
    
    constructor(options) {
        super(options);
    }
    
    bite(targetSnake){
        targetSnake.health -= 10;
    }
  
  }

  const snakeA = new Snake({name:'snakeA'});
  const snakeB = new Snake({name:'snakeB'});

  snakeA.bite(snakeB);
  console.log(snakeB.health);