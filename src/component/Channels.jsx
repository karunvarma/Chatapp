import React, { Component } from 'react';

class Channels extends Component {
    render() { 

        let channel_list = 'Sorry no channels available'

        if(this.props.all_channels) {
        
            console.log(this.props)
            
            channel_list = this.props.all_channels.map(
                c => <p> {c }</p>
            )
        }

        return (
            <div>
                {channel_list}
            </div>
        )
    }
}
 
export default Channels;