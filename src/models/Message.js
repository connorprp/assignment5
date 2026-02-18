class Message {
    constructor(username, first_name, last_name, message, redacted) {
        this.username = username ?? ''
        this.first_name = first_name ?? ''
        this.last_name = last_name ?? ''
        this.message = message ?? ''
        this.redacted_msg = redacted ?? ''
    }
}

export default Message