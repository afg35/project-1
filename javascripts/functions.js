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

//Req. 3c

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

//Req. 3d
let sumEvens = (arr) => {
  let sum = 0;
  for (let i of arr) {
    if (i % 2 == 0)
    sum = sum + i;
  }
  console.log(sum);
  return sum;
};



//Extra Credit 3E
const alphaPosition = function(ch) {
//97 is a, or position 1
//122 is z, or position final
//122 - ASCII position = a_number.
//26 - a_number = answer

let answer, position;
position = ch.charCodeAt(0);
position = 122 - position;
answer = 26 - position;

console.log(answer);
return answer;
};
