
//generating random number
 function genRandomNumber(n) {
    let arr = new Array(n);

    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
  return arr;
}

//sum function 
function sum(arr){
    return arr.reduce((sum, curr )=>(sum + curr), 0)
}

export  {genRandomNumber, sum}
