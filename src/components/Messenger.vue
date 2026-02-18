<script setup>
import { ref, toRaw } from 'vue';
import { useMessageStore } from '@/data/messagesStore';
import Message from '@/models/Message';
const messageStore = useMessageStore();
const message = ref(new Message());

const user = ref({
    username: localStorage.getItem('username') || '',
    first_name: localStorage.getItem('firstName') || '',
    last_name: localStorage.getItem('lastName' || '')
})

function sendMessage() {
    const msg = toRaw(message.value);
    messageStore.add(user.value.username, user.value.first_name, user.value.last_name, msg);
    message.value = new Message();
}


</script>

<template>
    <main>
        <p>Messenger</p>
        <p>Current User: {{ user.username }}</p>
        <div class="chat-container">
            <div v-for="(message, index) in messageStore.messages" :key="index"
                :class="['message', message.username === user.username ? 'sent' : 'received']">
                <div class="message-sender">
                    {{ message.first_name }} {{ message.last_name }}
                </div>
                <div class="message-text">
                    {{ message.message }}
                </div>
            </div>
        </div>
        <div class="input-container">
            <input v-model="message.message" type="text" placeholder="iMessage" @keyup.enter="sendMessage"
                aria-label="Send message" />
            <button @click="sendMessage">Send</button>
        </div>
    </main>
</template>

<style scoped>
main {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

.chat-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    background-color: #f2f2f7;
    height: 70%;
    width: 20%;
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}

/* Common message styles */
.message {
    max-width: 70%;
    padding: 10px 14px;
    border-radius: 20px;
    word-wrap: break-word;
    font-size: 16px;
    line-height: 1.4;
    box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);
}

/* Sender name */
.message-sender {
    font-weight: bold;
    margin-bottom: 4px;
    font-size: 14px;
    opacity: 0.8;
}

/* Message content */
.message-text {
    font-size: 16px;
}

/* Received messages (left-aligned, gray) */
.message.received {
    background-color: #e5e5ea;
    color: #000;
    align-self: flex-start;
    border-top-left-radius: 4px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

/* Sent messages (right-aligned, blue) */
.message.sent {
    background-color: #007aff;
    color: #fff;
    align-self: flex-end;
    border-top-left-radius: 20px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.input-container {
    flex-direction: column;
    padding: 16px;
    background-color: #f2f2f7;
    height: 5%;
    width: 20%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.input-container input {
    flex: 1;
    padding: 10px 14px;
    border-radius: 20px;
    border: none;
    background-color: #e5e5ea;
    font-size: 16px;
    outline: none;
    width: 70%;
}

.input-container input::placeholder {
    color: #8e8e93;
}

.input-container button {
    padding: 10px 16px;
    border-radius: 20px;
    border: none;
    background-color: #007aff;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
}

.input-container button:active {
    opacity: 0.8;
}
</style>
