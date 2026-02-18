import initialMessages from './messages.js'
import Message from '@/models/Message'
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messageStore', () => {
    const messages = reactive([...initialMessages])

    function add(username, first_name, last_name, message) {
        if (message instanceof Message) {
            const newMessage = {username: username, first_name: first_name, last_name: last_name, message: message}
            messages.push(newMessage);
        }
    }

    function toggleRedact(index, loggedInUser) {
        if (messages[index].value.username === loggedInUser) {
            const redactedMessage = messages[index];
            messages[index] = '(redacted)'
        }
        //add unredact
    }

    return { messages, add, toggleRedact }

})