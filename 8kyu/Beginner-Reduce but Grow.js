/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/


const grow = (x)=> {
    var pro = 1;
    for(i = 0; i < x.length; i++)
      pro = pro * x[i];
      return pro;
  }