import React from 'react';

class Chat extends React.Component{

    constructor(){
        super();
        this.state = {
            conn: {},
            terminalInput: '',
            messages: []
        }
        this.state.conn = new WebSocket('ws://localhost:9100');

        this.state.conn.onopen = function(e) {
            console.log("Connection established!");
        };

        this.state.conn.onmessage = function(e) {
            console.log('message received:' + e.data);
            let state = this.state;
            state.messages.push({
                text: e.data
            });
            this.setState(state);
        }.bind(this);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onTerminalChange = this.onTerminalChange.bind(this);
    }

    onTerminalChange(event) {
        let state = this.state;
        state.terminalInput = event.target.value;
        this.setState(state);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.state.conn.send(this.state.terminalInput);
    }

    render() {
        return (
            <div>
                <ChatView messages={this.state.messages} />
                <ChatTerminal onSubmit={this.onSubmitHandler} onChange={this.onTerminalChange}/>
            </div>
        )
    }
}

class ChatView extends React.Component{


    render() {

        const listItems = this.props.messages.map((message, index) =>
            <div key={index}>
                {message.text}
            </div>
        );


        return(
            <div>
                {listItems}
            </div>
        )
    }
}

class ChatTerminal extends React.Component{
    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input type="text" name="terminal" onChange={this.props.onChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Chat;