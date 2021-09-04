function addChats() {
    var group_chat = [
        ["Adi", "Ehhhh @Bryan @Patrick how did your H2 math go?"],
        ["Player", "Wahhh sian"],
        ["Player", "Couldn't seem to do all the stats questions"],
        ["Hilman", "F"],
        ["Hilman", "Bruh I thought yall could use GDC"],
        ["Adi", "Ya bro this paper all the qns can use GDC right?"],
        ["Player", "I mean yea we could but they put in weird variables"],
        ["Player", "@Patrick could you do the question on the ducks?"],
        ["Adi", "what ducks"],
        ["Player", "Some stupid question on size of ducks in diff seasons"],
        ["Adi", "They made us find SD by hand cos they put in some weird algebra"]
    ];
    
    // Chat element for HAPB-M chat group
    var group_chat_element = document.createElement('div');
    group_chat_element.setAttribute('id', 'chat-window');
    
    for (var i = 0; i < group_chat.length; i++) {
        var message = document.createElement('p');
        if(group_chat[i][0] == "Player") {
            message.setAttribute("class", "user");
        } else {
            message.setAttribute("class", "other-user");
        }
        message.innerHTML = group_chat[i][1];
        group_chat_element.appendChild(message);
    }

    document.getElementById('chat-window').remove();
    document.getElementById('messenger-main').appendChild(group_chat_element);
    group_chat_element.scrollTop = group_chat_element.scrollHeight;
}

window.onload = function() {

    var chat = document.getElementById('chat-window')
    chat.scrollTop = chat.scrollHeight;
}