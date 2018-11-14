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