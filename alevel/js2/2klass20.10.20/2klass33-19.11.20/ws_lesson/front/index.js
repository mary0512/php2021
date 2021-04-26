const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    document.querySelector('#status').innerText = 'ONLINE'
}
ws.onclose = () => {
    document.querySelector('#status').innerText = 'OFFLINE'
}


const nicknameElement = document.querySelector('#nickname')
const msgElement = document.querySelector('#msgInput')
const formElement = document.getElementById('form')
const listElement = document.querySelector('#messageList')

formElement.submit = (e) => {
    e.preventDefault();
    const {value: msgText} = msgElement;
    const {value: nicknameText} = nicknameElement;
    const data = {
        nick: nicknameText,
        msg: msgText,
    }
    ws.send(JSON.stringify(data))
    msgElement.value = "";
}