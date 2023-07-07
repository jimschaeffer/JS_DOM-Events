console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

document.getElementById("node1").textContent = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementsByClassName("node2") method to access this" */

document.getElementsByClassName("node2")[0].textContent = 'I used the getElementByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

/* document.querySelectorAll('h3').forEach(function(h3) {
    h3.innerHTML = 'I used the getElementByTagName("h3") method to access all of these';
  }); */

const h3Elements = document.getElementsByTagName("h3");
for (const text of h3Elements) {
  text.textContent = 'I used the getElementByTagName("h3") method to access all of these';
  }

/*   const allH3s = document.getElementsByTagName("h3");
  for (let i = 0; i < allH3s.length; i++){
    allH3s[i].textContent = 'I used the getElementByTagName("h3") method to access all of these';
  } */

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";
let parent = document.querySelector("#parent");

// TODO: Append the created node to the parent node using the element.appendChild() method

parent.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

const newAnchor = document.createElement("a");
newAnchor.textContent = "I am an <a> tag";
parent.insertBefore(newAnchor, p);

// BONUS: Add a link href to the <a>
newAnchor.href = "https://truecoders.io/";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

const container3 = document.querySelector("#exercise-container3");
const newPara = document.createElement("p");
newPara.textContent = "New Child Note";
const startingChild = document.getElementById("N1");
container3.replaceChild(newPara, startingChild);

// TODO: Remove the "New Child Node"

setTimeout(() => {
    newPara.remove();
}, 2000);
// disappears after two seconds! (2000 milliseconds)

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element
const ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++){
    const newLi = document.createElement("li");
    newLi.textContent = list[i];
    ul.appendChild(newLi);
    document.querySelector("#container").appendChild(ul);
}

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

/* function show */

function show(){
    const modalMain = document.createElement("div");
    const modalCard = document.createElement("div");
    const modalText = document.createElement("h2");
    const modalBtn = document.createElement("button");
    modalText.textContent = 'Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user';
    modalCard.append(modalText, modalBtn);
    modalMain.appendChild(modalCard);
    const containerDiv = document.querySelector(".exercise5");
    containerDiv.appendChild(modalMain);
}

document.querySelector("#btn").addEventListener("click", show);

// makes more sense to append it to the body or main than the exercise5 div