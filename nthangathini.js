function showHome() {
    hideAllSections();
    document.getElementById("home").style.display = "block";
}

function showEvents() {
    hideAllSections();
    document.getElementById("events").style.display = "block";
}

function showMembers() {
    hideAllSections();
    document.getElementById("members").style.display = "block";
}

function hideAllSections() {
    document.getElementById("home").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("members").style.display = "none";
}

function showAddEventForm() {
    document.getElementById("addEventForm").style.display = "block";
}

function showdate(){
    document.getElementById("dates").style.display ="block";
}

function showUploadForm() {
    document.getElementById("uploadForm").style.display = "block";
}

function showChat() {
    document.getElementById("chat").style.display = "block";

}
// ... (previous code) ...

let chatMessages = []; // Array to store chat messages

function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message !== "") {
        chatMessages.push({ text: message, sender: "You" });
        var sms = chatMessages
        updateChatWindow();
        messageInput.value = ""; // Clear input field
        ;

    }
   console.log(message + "  " + 'you') 
}


 
function updateChatWindow() {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML = ""; // Clear the existing chat window

    for (let i = 0; i < chatMessages.length; i++) {
        const message = document.createElement("div");
        message.textContent = `${chatMessages[i].sender}: ${chatMessages[i].text}`;
        chatWindow.appendChild(message);
    }
}



function showMembership() {
    document.getElementById("membership").style.display = "block";
}

function showAddMemberForm() {
    document.getElementById("addMemberForm").style.display = "block";
}

let members = []; // Array to store members

function addMember() {
    const memberName = document.getElementById("memberName").value.trim();

    if (memberName !== "") {
        members.push(memberName);
        updateMemberList();
        document.getElementById("memberName").value = ""; // Clear input field
    }
}

function removeMember(index) {
    members.splice(index, 1);
    updateMemberList();
}

function updateMemberList() {
    const memberListElement = document.getElementById("memberList");
    memberListElement.innerHTML = ""; // Clear the existing list

    for (let i = 0; i < members.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = members[i];
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeMember(i);
        };

        listItem.appendChild(removeButton);
        memberListElement.appendChild(listItem);

    }
}
