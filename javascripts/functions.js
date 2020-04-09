// jshint esversion: 7

//Req. 3b

let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    //arr[i]
  }
};

//Req 3c

//From lecture ex, double check it works
let arrMax = (arr) => {
  let maxNow = arr[0];
  let results = "";

  arr.forEach((elem) => {
    if(elem.length > maxNow){
      maxNow = elem.length;
    }
  });
  console.log(maxNow);
};
