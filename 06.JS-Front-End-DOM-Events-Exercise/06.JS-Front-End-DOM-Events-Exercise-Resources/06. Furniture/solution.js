function solve() {
    const[generateBtn, buyBtn] = document.querySelectorAll("button");
    const[inputTextarea, outputTextarea] = document.querySelectorAll("textarea");

    

    function onGenerateBtnClickHandler() {
      const inputData = JSON.parse(inputTextarea.value);
    }


    generateBtn.addEventListener("click", onGenerateBtnClickHandler);
  
}