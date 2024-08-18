window.addEventListener("load", solve);

function solve() {
  const addBtn = document.getElementById('add-btn');
  const nameInput = document.getElementById('name');
  const timeInput = document.getElementById('time');
  const descriptionInput = document.getElementById('description');
  const previewList = document.getElementById('preview-list');
  const archiveList = document.getElementById('archive-list');

  addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const eventName = nameInput.value.trim();
    const eventTime = timeInput.value.trim();
    const eventDescription = descriptionInput.value.trim();

    if (!eventName || !eventTime || !eventDescription) {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'flex';

    const articleElement = document.createElement('article');
    articleElement.className = 'flex';

    const nameP = document.createElement('p');
    nameP.textContent = eventName;

    const timeP = document.createElement('p');
    timeP.textContent = eventTime;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = eventDescription;

    articleElement.appendChild(nameP);
    articleElement.appendChild(timeP);
    articleElement.appendChild(descriptionP);

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons flex';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editEvent(liElement, eventName, eventTime, eventDescription));

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', () => moveToArchive(liElement));

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(nextBtn);

    liElement.appendChild(articleElement);
    liElement.appendChild(buttonDiv);

    previewList.appendChild(liElement);

    nameInput.value = '';
    timeInput.value = '';
    descriptionInput.value = '';
    addBtn.disabled = true;
  });

  function editEvent(liElement, eventName, eventTime, eventDescription) {
    nameInput.value = eventName;
    timeInput.value = eventTime;
    descriptionInput.value = eventDescription;

    liElement.remove();
    addBtn.disabled = false;
  }

  function moveToArchive(liElement) {
    liElement.querySelector('.buttons').remove();

    const archiveBtn = document.createElement('button');
    archiveBtn.className = 'archive-btn';
    archiveBtn.textContent = 'Archive';
    archiveBtn.addEventListener('click', () => archiveEvent(liElement));

    liElement.appendChild(archiveBtn);
    archiveList.appendChild(liElement);
  }

  function archiveEvent(liElement) {
    liElement.remove();
    addBtn.disabled = false;
  }

  // Enable the Add button when input fields have values
  [nameInput, timeInput, descriptionInput].forEach(input => {
    input.addEventListener('input', () => {
      addBtn.disabled = !(nameInput.value && timeInput.value && descriptionInput.value);
    });
  });
}