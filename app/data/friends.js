// ===============================================================================
// DATA
// Below data will hold all of the list of possible friends.
// ===============================================================================

var friendData = [
    {
        "friendName": "Vale",
        "photo": "http://muscocenter.org/wp-content/uploads/2017/05/Copy-of-Val-Tenors-Vale-Rideout.jpg",
        "scores": [
            5,
            1,
            5,
            4,
            4,
            5,
            4,
            5,
            3,
            3
        ]
    },
    {
        "friendName": "Jolly Green Giant",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjijbHq9LfcAhXolOAKHevLDEYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fkymoart%2Fportrait-reference%2F&psig=AOvVaw3XV7v2z3tgW9rm1KuXazUc&ust=1532526808567825",
        "scores": [
            3,
            5,
            4,
            2,
            1,
            3,
            2,
            5,
            5,
            1
        ]
    },
    {
        "friendName": "Roger Rabbit",
        "photo": "https://vignette.wikia.nocookie.net/disney/images/b/b6/Rogerpoint.png/revision/latest?cb=20131219044547",
        "scores": [
            1,
            2,
            4,
            4,
            5,
            4,
            1,
            1,
            2,
            1
        ]
    },
    {
        "friendName": "Wonder Woman",
        "photo": "https://img00.deviantart.net/08d0/i/2017/300/6/f/portrait_by_selenada-dbrulfe.jpg",
        "scores": [
            4,
            2,
            1,
            1,
            5,
            5,
            5,
            4,
            4,
            5
        ]
    },
    {
        "friendName": "The Pillowman",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            1,
            2,
            1,
            5,
            3,
            2,
            1,
            4,
            5,
            2
        ]
    },
    {
        "friendName": "Julie",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjijbHq9LfcAhXolOAKHevLDEYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fkymoart%2Fportrait-reference%2F&psig=AOvVaw3XV7v2z3tgW9rm1KuXazUc&ust=1532526808567825",
        "scores": [
            3,
            1,
            4,
            5,
            3,
            2,
            2,
            3,
            5,
            4
        ]
    }];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;