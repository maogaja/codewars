/*Write a program that finds the summation of every number from 1 to num.The number will always be a +ve integer greater than 0.*/

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  }