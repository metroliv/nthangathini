
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
    
    // for(let i = 0;i <= events.length; i++){
       

    // document.getElementById('eventtitle').innerHTML = events.Title[i]
    // document.getElementById('eventdate').innerHTML  = events.Date[i]
    // document.getElementById('Eventdescription').innerHTML = events.Comment[i]
      
       
    // }
    
}


function showYouth() {
    hideMembershipSubSections();
    document.getElementById("youth").style.display = "block";
}


function showWomen() {
    hideMembershipSubSections();
    document.getElementById("women").style.display = "block";
}


function showMen() {
    hideMembershipSubSections();
    document.getElementById("men").style.display = "block";
}


function showChildren() {
    hideMembershipSubSections();
    document.getElementById("children").style.display = "block";
}


function hideMembershipSubSections() {
    document.getElementById("youth").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("men").style.display = "none";
    document.getElementById("children").style.display = "none";
    // Add any additional subsections here
}

// Function to show the membership section
function showMembership() {
    hideMembershipSubSections();
    document.getElementById("membership").style.display = "block";
}

// Function to show the add member form
function showAddMemberForm() {
    hideMembershipSubSections();
    document.getElementById("addMemberForm").style.display = "block";
}

// Function to add a member
function addMember() {
    const memberName = document.getElementById("memberName").value.trim();

    if (memberName !== "") {
        members.push(memberName);
        updateMemberList();
        document.getElementById("memberName").value = "";
    }
}

// Function to remove a member
function removeMember(index) {
    members.splice(index, 1);
    updateMemberList();
}

// Function to update the member list
function updateMemberList() {
    const memberListElement = document.getElementById("memberList");
    memberListElement.innerHTML = "";

    for (let i = 0; i < members.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = members[i];

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeMember(i);
        };

        listItem.appendChild(removeButton);
        memberListElement.appendChild(listItem);
    }
}
