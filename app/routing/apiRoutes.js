var friends = require("../data/friends");

var path = require("path");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;
        // console.log(newFriendScores);

        var totalDifference = 0;
        var allDifferences = [];

        for (var i = 0; i < friends.length; i++) {

            // We then loop through all the scores of each friend
            for (var j = 0; j < 10; j++) {
                // this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
                totalDifference += Math.abs(friends[i].scores[j] - newFriendScores[j]);
            }
            // each total difference, for each potential friend, is pushed into the allDifferences array 
            allDifferences.push(totalDifference);
            // total difference is reset back to zero
            totalDifference = 0;
            // console.log(allDifferences);
        }
        // //best match will give the smallest values 
        var bestMatch = friends[allDifferences.indexOf(Math.min.apply(null, allDifferences))];
        
        res.send(bestMatch);

        friends.push(newFriend);

    });

}
