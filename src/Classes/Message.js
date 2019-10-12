
export class Message {
    constructor(parseMessage) {
        this.id = parseMessage.id;
        this.from = parseMessage.get("from");
        this.to = parseMessage.get("to");
        this.text = parseMessage.get("text");
        this.createdAt = parseMessage.get("createdAt");
        this.read = parseMessage.get("read");
        this.deleted = parseMessage.get("deleted");
    }
}
export function usersMessages(user, allMessages, fromUser) {
    let result = {
        new: 0,
        last:"",
        messages: []
    };
    console.log("messages");
    console.log(allMessages);
    console.log(user);
    if (user && allMessages) {
        allMessages.forEach(message => {
            if (message.from.id === user.id || message.to.id === user.id) {
                result.messages.push(message);
                if (!message.read && message.to.id === user.id && (!fromUser|| message.from.id === fromUser.id )) result.new++;
                if (message.createdAt>result.last && message.to.id === user.id && fromUser && message.from.id === fromUser.id ) result.last=message.createdAt;
            }


        });
    }
    return result;
}