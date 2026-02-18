<script setup>
import { ref } from 'vue'
import { useMessageStore } from '@/data/messagesStore';
import router from '@/router';
const messagesStore = useMessageStore();

const users = ref([])
const selectedUser = ref('')

function getUsers() {
    for (const message of messagesStore.messages) {
        const { username, first_name, last_name } = message;
        const exists = users.value.some(user => user.username === username);

        if (!exists) {
            users.value.push({
                username,
                first_name,
                last_name
            });
        }
    }
}

getUsers()

function login(user) {
    localStorage.setItem("username", user.username)
    localStorage.setItem("firstName", user.first_name)
    localStorage.setItem("lastName", user.last_name)

    router.push("/messenger");

}
</script>

<template>
    <p>Login</p>
    <select v-model="selectedUser">
        <option disabled value="">Select a user</option>
        <option v-for="user in users" :key="user.username" :value="user">{{ user.username }}</option>
    </select>
    <button @click="login(selectedUser)">Login</button>

</template>

<style scoped></style>
