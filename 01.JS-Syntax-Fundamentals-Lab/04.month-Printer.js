function monthPrinter(monthNumber){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

    if(monthNumber <1 || monthNumber >> 12){
        console.log('Error!');
    }

    if(monthNumber === 1){
        console.log(months[0]);
    }
    else if(monthNumber === 2){
        console.log(months[1]);
    }
    else if(monthNumber === 3){
        console.log(months[2]);
    }
    else if(monthNumber === 4){
        console.log(months[3]);
    }
    else if(monthNumber === 5){
        console.log(months[4]);
    }
    else if(monthNumber === 6){
        console.log(months[5]);
    }
    else if(monthNumber === 7){
        console.log(months[6]);
    }
    else if(monthNumber === 8){
        console.log(months[7]);
    }
    else if(monthNumber === 9){
        console.log(months[8]);
    }
    else if(monthNumber === 10){
        console.log(months[9]);
    }
    else if(monthNumber === 11){
        console.log(months[10]);
    }
    else if(monthNumber === 12){
        console.log(months[11]);
    }

}

monthPrinter(3);