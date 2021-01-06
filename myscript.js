//Your code goes here
// Exercise 1. Click the button to display your name
//use querySelector to select the button and the input where they type, and set them as two varaibles
//add an event listener for when the button is clicked
//on click, it should set the value of the input tag as a variable
//this variable should enter the paragraph tag with the id nameResult


//Exercise 2. Switch lights on mouseover
//first select the image using querySelector with the id imageOff
//add an event listener for a mouse over event
//when the mouse hovers over the image, change the src of the image to images/lighton.png


//Exercise 3. Double click to display content
//use query selector to select a button with id btndbName and paragraph with id displayPara
// add an event listener for a double click
//when it is double clicked, it should set the paragraph's text to "you double clicked me"
//the paragraph's text should be changed in js to the color red
//in the event handler you must also create an img element, assign its source to images/smileyface.png
//and then append this element to the paragraph


// Exercise 4. Traffic Lights
//select the buttons with ids btnStop, btnReady and btnGo
//also select their corresponding circular divs, stopDiv, readyDiv and goDiv
//add an event listener for each button
//each event listener should change the background color of the corresponding div to red for stop, yellow for ready, and green for go
//as well as change the background color of the other divs to black
//so that if you click a button, the corresponding light shows up


//Exercise 5. Change textbox border colours
//use queryselector to select input tags with ids firstName and lastName, and the button called btn2Name
//add an event listener for when you click the button
//when clicked, the border color of the firstName should change to red, and the lastName should change to green


//Exercise 6. validate the box [length should be more than 5 characters]
// select the button with id btnSub2, input with id myName2 and span with id errMsg
// add an event listener for a click event
// on clicking the button, we have a validating function that uses if ... else
// it will check if we have inputed more than an empty string, and a name with a length more than 8
//if successful, it should change the errMsg's text to 'All Good' and color to #eeeeee
//if not, it should display the text 'length should be more than 8', and change the text color to #ff0000, as well as focus the user back to the box


// Exercise 7.create a list of hobbies
//select the button with the id btnHobbies
//on click, the button should select the ul element inside the section with the id hobbies
//a for loop is then initiated that iterates 3 times
//in the for loop, you should create a variable that stores the answers to a prompt that asks the user for a hobby
//create a list item element
//change the list item elements innerHtml to whatever hobbie was chosen
//append this list item to our unordered list, hobbiesList


// 8. Display a profile card from an object
//set a constant profile object with a key for name, role, hobbies and an img with relevant values
//select the button with id btnProfile 
//on clicking this button, you should have a function displayProfile
// use for(let property in profile) to iterate over every property in the profile object
//double check the profile object has this given property, and if it does, select the element with id displayCard
//change the displayCard's inner html to a html code that inserts and displays the properties inside the profile object