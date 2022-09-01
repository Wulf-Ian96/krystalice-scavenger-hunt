# krystalice.com

scavenger hunt application/website

# SRC folder

the src folder is where you will make all of your changes, the public folder has the index.html but that is just a placeholder for the rest of the components / pages to be injected in.

# Components folder

The components folder is where you will see all of the elements / items the page has. Like a navbar, the clue card, clue input ect.
Inside those is where you can make all of your changes.

when first opening one of these files it can look a little overwhelming. Don't worry to much about the logic at the top of the file.

Where you want to go is going to be towards the bottome you'll see a "return( html in here)" statement. That is where all of the html will go
Make sure that all the html is inside of the ( ) of the return statement.

# Pages folder

This is where the html and code is for the container of the home page(the clues you create and final clue, game over card ect)
and the admin page, where you create all of the clue content and upload your own images

# Styles folder

Holds two css files stlye.css is for main stylings for the cards and navbar and basic page stylings

adminStyles.css is where all of the stylings for the admin page is

\***\* one difference you will notice is instead of html elements having a "class" it is "className" with camel casing like so \*\***

# the remainder of the code like firebse.js and index.js are for linking up to the database and all of that logic.

# Deploying the app

after making your changes you will need to run two commands in your ide terminal

# 1) cd front-end

    you will use this command to make sure you are in the correct directory. front-end is the folder that holds all of the code, if you are not in this folder .../krystalice.come/front-end the rest will not work properly

# 2) npm run build

    this command will re-build the app for production and allow it to be uploaded to the hosting server

# 3) firebase deploy

    this command will deploy your production build to the firebase hosting and get your changes live. Can take up to 10 mins to see changes.

# 4) npm start

    while you are making changes run this in the terminal, after you've made sure you're in the front-end directory (cd front-end)
    then enter "npm start" and this will start the application on localHost:3000 so you can see the changes live while you're making them
