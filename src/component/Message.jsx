import React, { Component } from 'react';

class Message extends Component {
    
    render() { 
        return ( 
            <div>
                <p>{this.props.senderName}</p>
                <span>{this.props.text}</span>
            </div>
         );
    }
}
 
export default Message;