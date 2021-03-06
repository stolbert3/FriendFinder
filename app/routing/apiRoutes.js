/* Should contain two routes:
   1. A GET route with the url '/api/friends' - This will be used to display a JSON of all possible friends.
   2. A POST routes '/api/friends' - This will be used to handle incoming survey results. This route will also 
        be used to handle the compatibility logic:
      * Compatibility logic:
        1. Convert each user's results into a simple array of numbers (ex: '[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]')
        2. With that done, compare the difference between current user's scores against those from other users, question by question.
        3. Add up the differences to calculate the 'totalDifference'
            Example:
                User 1: '[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]'
                User 2: '[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]'
                Total Difference: 2 + 1 + 2 = 5
            * Make sure to use the absolute value of differences (no negative solutions!)
        4. The closest match will be the user with the least amount of difference.

    3. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
        * The modal should display both the name and picture of the closest match.
*/

var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        //find closest matching friend
        var closestFriendScore = 0;
        var closestFriendIndex = 0;
        var userAnswers = req.body.scores;
        for (i=0; i<friendsData.length; i++) {
            var scoreDifference = 0;
            var currentFriend = friendsData[i]
            var currentFriendScoreArray = currentFriend.scores;
            console.log("Loop #" + i);
            console.log("Score Array: " + currentFriendScoreArray);
            for (i=0; i<10; i++) {
                scoreDifference += (Math.abs(parseInt(userAnswers[i]) - parseInt(currentFriendScoreArray[i])));
            };
            if (scoreDifference < closestFriendScore) {
                closestFriendScore = scoreDifference;
                closestFriendIndex = i;
            };
        }

        friendsData.push(req.body); //adds new friend to friend database

        res.json(friendsData[closestFriendIndex]); //returns data of closest friend to create alert on survey page

        console.log(friendsData)
    });
};