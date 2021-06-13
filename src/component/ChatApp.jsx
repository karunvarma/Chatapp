import React, { Component } from 'react';
import Channels from './Channels';
import axios  from 'axios'


class ChatApp extends Component {
    state = {
        all_channels : [
            {id:10,name:'john',members:20}
        ]
      }

    componentDidMount(){
        this.loadAllChannels();
    }

    loadAllChannels = async () => {
        try {
            let response = await axios.get('http://localhost:8801/getAllChannels')
            console.log(response)
            this.setState(
                {
                    all_channels: response.data.all_channels
                }
            )
        }
        catch(error) {
            console.log(":(")
            console.log(error.message)
        }

    }

    render() { 
        return (  
            <div>
                <Channels all_channels = {this.state.all_channels}/>
            </div>
        );
    }
}
 
export default ChatApp;