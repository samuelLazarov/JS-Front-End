const baseUrl = 'http://localhost:3030/jsonstore/matches/';
const list = document.getElementById('list');
const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');
const addMatchBtn = document.getElementById('add-match');
const editMatchBtn = document.getElementById('edit-match');
const loadMatchesBtn = document.getElementById('load-matches');

let editingMatchId = null;

document.addEventListener('DOMContentLoaded', () => {
    loadMatchesBtn.addEventListener('click', loadMatches);
    addMatchBtn.addEventListener('click', addMatch);
    editMatchBtn.addEventListener('click', editMatch);
});

async function loadMatches() {
    try {
        const response = await fetch(baseUrl);
        const matches = await response.json();

        list.innerHTML = '';

        Object.values(matches).forEach(match => {
            const li = createMatchElement(match);
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading matches:', error);
    }
}

async function addMatch() {
    const matchData = {
        host: hostInput.value,
        score: scoreInput.value,
        guest: guestInput.value
    };

    if (validateMatchData(matchData)) {
        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(matchData)
            });

            loadMatches();
            clearForm();
        } catch (error) {
            console.error('Error adding match:', error);
        }
    }
}

async function editMatch() {
    if (!editingMatchId) return;

    const matchData = {
        host: hostInput.value,
        score: scoreInput.value,
        guest: guestInput.value
    };

    if (validateMatchData(matchData)) {
        try {
            await fetch(`${baseUrl}${editingMatchId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(matchData)
            });

            loadMatches();
            clearForm();
            toggleButtons(true);
        } catch (error) {
            console.error('Error editing match:', error);
        }
    }
}

async function deleteMatch(id) {
    try {
        await fetch(`${baseUrl}${id}`, {
            method: 'DELETE'
        });

        loadMatches();
    } catch (error) {
        console.error('Error deleting match:', error);
    }
}

function createMatchElement(match) {
    const li = document.createElement('li');
    li.className = 'match';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    const hostP = document.createElement('p');
    hostP.textContent = match.host;

    const scoreP = document.createElement('p');
    scoreP.textContent = match.score;

    const guestP = document.createElement('p');
    guestP.textContent = match.guest;

    infoDiv.appendChild(hostP);
    infoDiv.appendChild(scoreP);
    infoDiv.appendChild(guestP);

    const btnWrapper = document.createElement('div');
    btnWrapper.className = 'btn-wrapper';

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => populateForm(match));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteMatch(match._id));

    btnWrapper.appendChild(changeBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(infoDiv);
    li.appendChild(btnWrapper);

    return li;
}

function populateForm(match) {
    hostInput.value = match.host;
    scoreInput.value = match.score;
    guestInput.value = match.guest;

    editingMatchId = match._id;
    toggleButtons(false);
}

function clearForm() {
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
    editingMatchId = null;
}

function toggleButtons(isAdd) {
    addMatchBtn.disabled = !isAdd;
    editMatchBtn.disabled = isAdd;
}

function validateMatchData(matchData) {
    return matchData.host && matchData.score && matchData.guest;
}