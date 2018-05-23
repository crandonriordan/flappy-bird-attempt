console.log("succesfull main");

let mainState = {
    // 'main' state will contain the game
    preload: function() {
        // bird sprite on game objects > prop load > prop image
        game.load.image('bird', 'assets/bird.png');
        
    },
    
    create: function() {
        // change bg color
        game.stage.backgroundColor = "#71c5cf";
        
        // set physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // display the bird at x=100 and y=245;
        this.bird = game.add.sprite(100, 245, 'bird');
        
        // add physics to the bird
        // needed for movements, gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);
        
        // add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;
        
        // call 'jump' f(x) when spacekey is hit
        let spaceKey = game.input.keyboard.addKey(
                Phaser.Keyboard.SPACEBAR
            );
        spaceKey.onDown.add(this.jump, this);
    },
    
    update: function() {
        // called 60 times per seconds
        // call restartGame f(x)
        if (this.bird.y < 0 || this.bird.y > 490) {
            this.restartGame();
        }
    },
    
    jump: function() {
        // vertical velocity to the bird
        this.bird.body.velocity.y = -350;
    },
    
    // restart f(x)
    restartGame: function() {
        //  starts 'main' state again
        game.state.start('main')
    }
};

// Init phaser and create a 400px by 490px game
let game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');