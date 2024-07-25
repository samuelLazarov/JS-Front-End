function printLoadingBar(percents) {
    const maxPercents = 100;
  
    function printLoadedMessage() {
      console.log("100% Complete!");
      console.log("[%%%%%%%%%%]");
    }
  
    function printLoadingMessage(loadedPercents, percentCount, dotCount) {
      const loadingState = `${"%".repeat(percentCount)}${".".repeat(dotCount)}`;
      console.log(`${loadedPercents}% [${loadingState}]`);
      console.log("Still loading...");
    }
  
    if (percents === maxPercents) {
      printLoadedMessage();
      return;
    }
  
    const maxSymbols = 10;
    const percentSymbolCount = parseInt(maxPercents * (percents * 0.001));
    const dotSymbolCount = maxSymbols - percentSymbolCount;
  
    printLoadingMessage(percents, percentSymbolCount, dotSymbolCount);
  }
  
  printLoadingBar(30);
  console.log(" ");
  printLoadingBar(50);
  console.log(" ");
  printLoadingBar(90);
  
  // 50% [%%%%%.....]
  // Still loading...
  
  // 100% Complete!
  // [%%%%%%%%%%]

  function drawLoadingBar(number){
    if (number === 100) {
        console.log('100% Complete!');
        return;
    }

    const percentage = number / 10;

    let loadingBar = '[';

    for (let i = 0; i < 10; i++) {
        if (percentage > i) {
            loadingBar += '%';
        }
        else{
            loadingBar += '.';
        }
        
    }

    loadingBar += ']';

    console.log(`${number}% ${loadingBar}`);
    console.log('Still loading...');
}

drawLoadingBar(50);
