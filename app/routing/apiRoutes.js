// Dependencies
// =============================================================
let path = require('path');
let friends = require("../data/friends.js");

module.exports = (app) => {
    app.get('/../api/friends', (req, res) => {
        res.json(friends);
    });
    app.post('/friends', (req, res) => {
        let matchMadeInHeaven = {
            'name': '',
            'photo': '',
            'scores': []
        };

        let scoreDifference = 20;

        
    });
}