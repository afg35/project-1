// jshint esversion: 7

//Req. 3b

let arrAvg = (arr) => {
  let sum = 0;
  let length = arr.length;
  let average = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  average = sum / length;

  console.log(average);
  return average;

};

//Req 3c

//From lecture ex, double check it works (IT DOES NOT)
let arrMax = (arr) => {
  let maxNow = arr[0];

  arr.forEach((elem) => {
    if(elem > maxNow){
      maxNow = elem;
    }
  });
  console.log(maxNow);
  return maxNow;
};
