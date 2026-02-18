<script setup>
import { ref } from 'vue'
import { useMessageStore } from '@/data/messagesStore';
import router from '@/router';
const messagesStore = useMessageStore();

const users = ref([])
const selectedUser = ref('')


//Get users and store in users ref
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

function login(user) {
    if (user) {
        localStorage.setItem("username", user.username)
        localStorage.setItem("firstName", user.first_name)
        localStorage.setItem("lastName", user.last_name)

        router.push("/messenger");
    }
}
</script>

<template>
    <main class="login-wrapper">
        <div class="login-card">
            <h2>Login</h2>

            <select v-model="selectedUser" class="ios-input">
                <option disabled value="">Select a user</option>
                <option v-for="user in users" :key="user.username" :value="user">
                    {{ user.username }}
                </option>
            </select>

            <button class="ios-button" :disabled="!selectedUser" @click="login(selectedUser)">
                Continue
            </button>
        </div>
    </main>
</template>

<style scoped>

.login-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.login-card {
    background: white;
    padding: 32px;
    width: 320px;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;
}

h2 {
    margin: 0;
    text-align: center;
    font-weight: 600;
}

.ios-input {
    padding: 12px 16px;
    border-radius: 14px;
    border: none;
    background-color: #e5e5ea;
    font-size: 16px;
    outline: none;
    appearance: none;
}

.ios-button {
    padding: 12px 16px;
    border-radius: 20px;
    border: none;
    background-color: #007aff;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.15s ease, transform 0.05s ease;
}

.ios-button:active {
    opacity: 0.8;
    transform: scale(0.98);
}

.ios-button:disabled {
    background-color: #b0b0b5;
    cursor: not-allowed;
}
</style>
