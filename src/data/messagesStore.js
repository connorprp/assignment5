import initialMessages from './messages.js'
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messageStore', () => {
    const messages = reactive([...initialMessages])

    function add(message) {
        messages.push(message);
        console.log(messages[messages.length - 1])
    }

    function redact(index, loggedInUser) {
        if (messages[index].username === loggedInUser) {
            messages[index].redacted_msg = messages[index].message
            messages[index].message = '(redacted)'
        }
    }
    function unredact(index, loggedInUser) {
        if (messages[index].username === loggedInUser) {
            messages[index].message = messages[index].redacted_msg
        }
    }

    return { messages, add, redact, unredact }

})