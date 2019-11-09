// Dependencies
// =============================================================
let friends = require("../data/friends.js");

module.exports = (app) => {
    app.get('/../api/friends', (req, res) => {
        res.json(friends);
    });
    app.post('/friends', (req, res) => {
        let matchMadeInHeaven = {
            'name': '',
            'photo': ''
        };

        // Score difference between the user and the other people
        let scoreDifferences = [];
        let tempScore = 0;
        // Data references
        let userData = req.body;
        let userScores = userData.scores;

        // Loop through all friends and then their scores, and find the lowest difference
        for (let i = 0; i < friends.length; i++) {
            scoreDifferences = [];
            for (let j = 0; j < userData.length; j++) {
                scoreDifferences[i] = Math.abs(parseInt(friends[i].scores[j] - parseInt(userScores[j])));
                if ()
            }
        }
    });
}