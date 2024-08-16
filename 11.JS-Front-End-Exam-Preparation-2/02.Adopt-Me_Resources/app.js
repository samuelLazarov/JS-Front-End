window.addEventListener("load", solve);

function solve() {
    const adoptButtomElement = document.getElementById("adobt-btn");

    const typeInputElement = document.getElementById("type");
    const ageInputElement = document.getElementById("age");
    const genderInputElement = document.getElementById("gender");

    const adoptionInfoListElements = document.getElementById("adoption-info");

    function clearInputFields() {
      typeInputElement.value = "";
      ageInputElement.value = "";
      genderInputElement.value = "";
    }

    function createAnimalListItem () {
      const liElement = document.createElement("li");
      const articleElement = document.createElement("article");

      const typeParagraphElement = document.createElement("p");
      typeInputElement.textContent = typeInputElement.value;
      articleElement.appendChild(typeParagraphElement);

      const genderParagraphElement = document.createElement("p");
      genderParagraphElement.textContent = genderInputElement.value;
      articleElement.appendChild(genderParagraphElement);

      const ageParagraphElement = document.createElement("p");
      ageParagraphElement.textContent = ageInputElement.value;
      articleElement.appendChild(ageParagraphElement);

      liElement.appendChild(articleElement);
      
      adoptionInfoListElements.appendChild(liElement);
    }

    function onAdoptClickHandler(event) {
      event.preventDefault();
      createAnimalListItem();

      

    }



    adoptButtomElement.addEventListener("click", onAdoptClickHandler);
  }
  