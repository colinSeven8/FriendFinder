// Dependencies
// =============================================================
let friends = require("../data/friends");

module.exports = (app) => {
    app.get('/../api/friends', (req, res) => {
        res.json(friends);
        console.log(json(friends));
    });
    app.post('/friends', (req, res) => {
        let matchMadeInHeaven = {
            'name': '',
            'photo': ''
        };

        // Score difference between the user and the other people
        let friendIndex = 0;
        let tempScore = 0;

        // This is initialized high so that it can be compared against lower values in the loop
        let lowestScore = 100;

        // Data references
        let userData = req.body;
        let userScores = userData.scores;

        // Loop through all friends and then their scores, and find the lowest difference
        for (let i = 0; i < friends.length; i++) {
            tempScore = 0;
            for (let j = 0; j < userData.length; j++) {
                tempScore += Math.abs(parseInt(friends[i].scores[j] - parseInt(userScores[j])));
                console.log(tempScore);
            }
            // Found the lowest score out of everyone...
            if (lowestScore < tempScore) {
                lowestScore = tempScore;
                friendIndex = i;
            }
        }
        console.log(lowestScore);

        // Add the newest friend to the list
        friends.push(userData);

        // Pass the values of the bestie
        matchMadeInHeaven.name = friends[friendIndex].name;
        matchMadeInHeaven.photo = friends[friendIndex].photo;

        // Return the best match
        res.json(matchMadeInHeaven);
        console.log(matchMadeInHeaven);
    });
}