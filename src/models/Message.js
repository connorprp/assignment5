class Message {
    constructor(username, first_name, last_name, message) {
        this.username = username ?? ''
        this.first_name = first_name ?? ''
        this.last_name = last_name ?? ''
        this.message = message ?? ''
    }
}

export default Message