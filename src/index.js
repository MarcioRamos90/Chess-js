function game() {
    const game = {};

    game.state = {

    }

    function start() {
        
    }

    function stop() {}

    function reset() {}

    function save() {}

    game.start = start;
    game.stop = stop;
    game.reset = reset;
    game.save = save;

    return game;
}

document.getElementById('start-game-btn').addEventListener("click", () => {
    const gameStarted = game();
    gameStarted.start();
})
