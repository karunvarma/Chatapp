import React, { Component } from 'react';

class MessageBox extends Component {
    state = {  }

    render() {
        
        let message_list = "no"



        return ( 
            <div>
                <div>
                    <p>{message_list}</p>
                </div>
                <input type="text"></input>
                <button>send</button> 
           </div>
         );
    }
}
 

export default MessageBox