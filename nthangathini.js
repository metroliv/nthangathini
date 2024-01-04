
let chatMessages = [];
let members = [];
let events = [];

function showHome() {
    hideAllSections();
    document.getElementById("home").style.display = "block";
}

// Function to show the events section
function showEvents() {
    hideAllSections();
    document.getElementById("events").style.display = "block";
}


function showMembers() {
    hideAllSections();
    document.getElementById("members").style.display = "block";
}

// Function to hide all sections
function hideAllSections() {
    document.getElementById("home").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("members").style.display = "none";
}

// Function to show the add event form
function showAddEventForm() {
    hideEventSubSections();
    document.getElementById("addEventForm").style.display = "block";
}


function hideEventSubSections() {
    document.getElementById("addEventForm").style.display = "none";
    document.getElementById("uploadForm").style.display = "none";
    document.getElementById("chat").style.display = "none";
    document.getElementById("viewEvent").style.display = "none";
    
}

// Function to show the upload form
function showUploadForm() {
    hideEventSubSections();
    document.getElementById("uploadForm").style.display = "block";
}

// Function to show the chat section
function showChat() {
    hideEventSubSections();
    document.getElementById("chat").style.display = "block";
}

// Function to send a chat message
function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message !== "") {
        chatMessages.push({ text: message, sender: "You" });
        updateChatWindow();
        messageInput.value = "";
    }
}

// Function to update the chat window
function updateChatWindow() {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML = "";

    for (let i = 0; i < chatMessages.length; i++) {
        const message = document.createElement("div");
        message.textContent = `${chatMessages[i].sender}: ${chatMessages[i].text}`;
        chatWindow.appendChild(message);
    }
}

// Function to show the view event section
function showViewEvent() {
    hideEventSubSections();
    document.getElementById("viewEvent").style.display = "block";
    updateEventList();
}
function addEvent(){
 
  var post = {Title:title,Comment:comment,Date:date}
  var titles = document.getElementById('title')
  var dates = document.getElementById('date')
  var comments = document.getElementById('comment')

  title = titles.value
  date = dates.value 
  comment = comments.value
  //description.value = description
  
  
  events.push(post)
  
  console.log(events)
}


function updateEventList() {  
    
    
    
}

function showSection(sectionId) {
    hideAllSections();
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

function hideAllSections() {
    var sections = document.querySelectorAll('main > div');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}

function submitFAQQuestion(event) {
    hideAllSections();
    event.preventDefault();
    var faqMessageInput = document.getElementById('faqMessageInput');
    var faqChatWindow = document.getElementById('faqChatWindow');

    var question = faqMessageInput.value.trim();
    if (question !== '') {
        // Add the user's question to the chat window
        faqChatWindow.innerHTML += '<p><strong>You:</strong> ' + question + '</p>';
        // You can add logic here to handle the question or integrate with a backend for processing.
        faqMessageInput.value = ''; // Clear the input field
    }
}

function addEvent() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const approved = document.getElementById('chackbox').checked;
    const description = document.getElementById('comment').value;

    fetch('/api/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, date, approved, description }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function sendMessage(event) {
    // Add logic to handle sending messages in the chat
    event.preventDefault();
}

function showHelpCenter() {
    hideAllSections();
    var helpCenter = document.getElementById('helpCenter');
    if (helpCenter) {
        helpCenter.style.display = 'block';
    }
}

function submitFAQQuestion(event) {
    event.preventDefault();
    var faqMessageInput = document.getElementById('faqMessageInput');
    var faqChatWindow = document.getElementById('faqChatWindow');

    var question = faqMessageInput.value.trim();
    if (question !== '') {
        // Add the user's question to the chat window
        faqChatWindow.innerHTML += '<p><strong>You:</strong> ' + question + '</p>';
        // You can add logic here to handle the question or integrate with a backend for processing.
        faqMessageInput.value = ''; // Clear the input field
    }
}

f// JavaScript code to toggle the visibility of the Leaders section

function showLeaders() {
    var leadersSection = document.getElementById("leaders");

    // Toggle the display property
    if (leadersSection.style.display === "none" || leadersSection.style.display === "") {
        leadersSection.style.display = "block";
    } else {
        leadersSection.style.display = "none";
    }
}

// Add the event listener to the "Leaders" button
document.querySelector('[onclick="showLeaders()"]').addEventListener("click", showLeaders);

// JavaScript code to toggle the visibility of the Add Leaders form

function showAddLeaderForm() {
    var addLeaderForm = document.getElementById("addLeaderForm");

    // Toggle the display property
    if (addLeaderForm.style.display === "none" || addLeaderForm.style.display === "") {
        addLeaderForm.style.display = "block";
    } else {
        addLeaderForm.style.display = "none";
    }
}

// Add the event listener to the "Add Leader" button
document.querySelector('[onclick="showAddLeaderForm()"]').addEventListener("click", showAddLeaderForm);


    function addLeader(event) {
        event.preventDefault();
        var leaderName = document.getElementById('leaderName').value;
        var leaderRole = document.getElementById('leaderRole').value;
        var leaderImage = document.getElementById('leaderImage').value;

        // Create a new leader div
        var leaderDiv = document.createElement('div');
        leaderDiv.className = 'leader';

        // Create image element
        var imgElement = document.createElement('img');
        imgElement.src = leaderImage;
        imgElement.alt = leaderName;

        // Create name and role elements
        var h2Element = document.createElement('h2');
        h2Element.textContent = leaderName;

        var pElement = document.createElement('p');
        pElement.textContent = leaderRole;

        // Append elements to the leader div
        leaderDiv.appendChild(imgElement);
        leaderDiv.appendChild(h2Element);
        leaderDiv.appendChild(pElement);

        // Append the new leader div to the leaders section
        var leadersSection = document.getElementById('leaders');
        if (leadersSection) {
            leadersSection.appendChild(leaderDiv);
        }

        // Hide the add leader form
        var addLeaderForm = document.getElementById('addLeaderForm');
        if (addLeaderForm) {
            addLeaderForm.style.display = 'none';
        }
    }
