// jshint esversion: 7

//define helper functions here
let rollDie = () => {
    return Math.floor (Math.random() * 6) + 1;
};


//Define a controller to handle the button click
let controller = () => {
  let target, die1, die2, rollCount, die1URL, die2URL,
  imgElem1, imgElem2, output;

  target = document.querySelector("input").value;
  console.log(target);

  //roll target number (and count rolls)
  rollCount = 0;

  do {
    //roll the dice
    die1 = rollDie();
    die2 = rollDie();

    //incrment roll counter
    rollCount += 1;

    //log the dice and the counter
    console.log(`d1 = ${die1} d2 = ${die2} count=${rollCount}`);


  } while (die1 + die2 != target);

  //update images on web page

  die1URL = `images/die${die1}.gif`;
  //console.log(die1URL); this was just for testing
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  //display number of rolls on the web page
  if (rollCount == 1) {
    output = document.querySelector("div");
    output.innerHTML = `You hit your number in ${rollCount} roll!`;
  }
//output = '...roll${(rollCount == 1)?"":"s"}!';
  else {
  output = document.querySelector("div");
  output.innerHTML = `You hit your number in ${rollCount} rolls!`;
}


};

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
