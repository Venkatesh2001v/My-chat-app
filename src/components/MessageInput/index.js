import React, {Component} from 'react'

import SendLogo from '../../assests/send.svg'

import './index.css'

class MessageInput extends Component{
    state = {userInput: ""}

    ChangeUserInput = (event) => {
        this.setState({userInput: event.target.value})
    }

    showAlert = () => {
        const {userInput} = this.state
        if (userInput === "") {
            alert("Please Enter a Message")
        }else {
            window.alert('This application is still under development. Some features are not yet available.');
         }
    };

    render() {
        return(
            <div className='inputs-and-send-btn-container'>
                <div className='input-container'>
                    <input onChange={this.ChangeUserInput} className='input' type='text' placeholder='Message' />
                </div>
                <div className='send-btn-container'>
                    <button onClick={this.showAlert} className='send-btn'>
                        <img className='send-btn-img' src={SendLogo} alt="Send logo"  />
                    </button>
                </div>
            </div>
        )
    }
}

export default MessageInput