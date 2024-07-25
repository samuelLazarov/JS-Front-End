function printMatrix(number){
    for (let i = 1; i <= number; i++) {
        let row = Array(number).fill(number).join(' ');
        console.log(row); 
    }
}

printMatrix(7);


function printNxNMatrix(x) {
    const getNumberNTimes = (number, separator = " ") => {
      return `${number}${separator}`.repeat(number).trim();
    };
  
    for (let row = 0; row < x; row++) {
      console.log(getNumberNTimes(x));
    }
  }
  
  printNxNMatrix(2);