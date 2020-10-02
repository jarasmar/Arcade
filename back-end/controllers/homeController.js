exports.games = (req, res)=> {
    res.json({
        "games": ["Pong", "Snake", "PacMan", "Tetris"] //Key : Value
    });
};
