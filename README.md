###Find your most compatible friend! (from our handy list)

# Friend Finder

[![Friends](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYvMgFqvFVevX_CR877etwRTpLl6c2Y5nk9GlxXJBz6vyA6Np "Friends")](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYvMgFqvFVevX_CR877etwRTpLl6c2Y5nk9GlxXJBz6vyA6Np "Friends")

This app is a simple app which allows a user from the start to do two things from the root directory (/):

1. view the API file in JSON format of all possible friends they can be matched with. 
2. click on the button to navigate to a survey of 10 questions, each with choices from 1-5. Following their input of their name and a URL of a photo of themself.

Then when the submit button is pressed, the program processes the data from the server to find the friend whose answers were closest to their own - and presents them with the name and photo of that friend in a modal to the browser. 

##Prerequisites
To download and install this program on your local computer, you will need an editor such as 

VISUAL STUDIO CODE

After downloading it your local drive, you will need to open its folder as a workspace. 

From there you will have to install a few modules to help run it. The following will be required at the very least (from GitHub):

NODE.js

npm installs:

express
mysql
body-parser

for npm installs, they can be installed from the command line using the following codes:

1. npm init -y (enter)
2. npm install express mysql body-parser

the pogram requires a local server as well. For development of this app, MAMP was used running on port 3000.

###To run:

At the command line, navigate to the root folder for MyFriendFinder, then at the command line, enter

   node server (enter)

As long as your server is connected and port and server information is entered into server.js file, then from your browser, navigate to:

   localhost:3000 (enter)

1. from the home page (in the / directory), user may choose either to view the API JSON object of all friends currently in the system, OR to proceed to the survey to be eventually matched with a friend whose answers to the survey are a closest match to their own. 

2. When in the survey, a user is asked to enter their name and a URL of a photo of themself. Then they are given a survey of 10 questions where they can answer with a drop-down menu of numbers 1-5. Upon clicking 'submit' they are then shown a modal popup which displays their new friend - a friend whose answers most closely matched their own. 

### Built With

HTML
CSS
Bootstrap
Javascript
Node.js
MySQL
Express.js

## Author

Vale Rideout
www.valerideout.com
Student, Rutgers CS bootcamp, summer 2018

##Acknowledgements

Much help and support given by the staff of the Rutgers Full-time Bootcamp, summer 2018

Instructor:
Franklin Dawes

TA's:
Charles Dunn
Kinnera Bezawada
Tom Keel
