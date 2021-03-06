// Used to save application's data as an array of objects.
// Each of these objects should roughly follow the format below:
/* json
   {
     "name": "Ahmed",
     "photo": "http://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3/jpg",
     "scores": [
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
     ]
} */

var friendsArray = [
    {
      friendName: "Ahmed",
      friendPhoto: "https://dummyimage.com/600x400/000/fff",
      scores: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2]
    }
];

module.exports = friendsArray;