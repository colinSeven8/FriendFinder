// Dependencies
// =============================================================
let friends = require("../data/friends");
let path = require('path');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
        console.log('Were in apiRoutes GET!');
    });
    app.post('/api/friends', function (req, res) {
        let matchMadeInHeaven = {
            'name': '',
            'photo': ''
        };

        // Score difference between the user and the other people, and index to use later
        let friendIndex = 0;
        let tempScore = 0;

        // This is initialized high so that it can be compared against lower values in the loop
        let lowestScore = 100;

        // Data references
        let userData = req.body;
        let userScores = userData.scores;
        console.log('Before FOR LOOP! userScores ' + userScores.length);
        console.log('Before FOR LOOP! friends ' + friends.length);
        console.log('Before FOR LOOP! userData ' + userData);

        // Loop through all friends and then their scores, and find the lowest difference
        for (let i = 0; i < friends.length; i++) {
            console.log('Inside FOR LOOP! ' + userScores.length);
            tempScore = 0;
            for (let j = 0; j < userScores.length; j++) {
                console.log('Inside inside FOR LOOP!');
                tempScore += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
                console.log('friends[i].scores[j] ' + friends[i].scores[j]);
                console.log('parseInt(userScores[j]) ' + parseInt(userScores[j]));
                console.log('tempScore ' + tempScore);
            }
            // Found the lowest score out of everyone...
            if (tempScore < lowestScore) {
                lowestScore = tempScore;
                friendIndex = i;
                console.log('lowestScore ' + lowestScore);
            }
        }

        // Add the newest friend to the list
        friends.push(userData);

        // Pass the values of the bestie
        matchMadeInHeaven.name = friends[friendIndex].name;
        matchMadeInHeaven.photo = friends[friendIndex].photo;

        // Return the best match
        res.json(matchMadeInHeaven);
        console.log('Were in apiRoutes POST!');
    });
}