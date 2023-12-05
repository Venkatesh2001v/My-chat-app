import React,{Component} from 'react'

import MessageInput from '../MessageInput/index'

import UserImage from '../../assests/Caressa-img.svg'
import ArrowLeft from '../../assests/arrow-left.svg'
import TrashBin from '../../assests/trash-bin.svg'
import MyImage from '../../assests/from-chat-img.svg'

import './index.css'

class CurrentChatContainer extends Component{

    showAlert = () => {
        window.alert('This application is still under development. Some features are not yet available.');
      };

    render(){
        return(
            <div className='current-chat-container'>
                <div className='header-container'>
                    <div className='users-container'>
                        <img className='user-img' src={UserImage} alt='User img' />
                        <p className='name'>Caressa Jessalin</p>
                    </div>
                    <div className='buttons-container'>
                        <button onClick={this.showAlert} className='inner-container'>
                            <img className='btn-logo' src={ArrowLeft} alt='Left arrow logo'/>
                            <p className='btn-name'>Back</p>
                        </button>
                        <button onClick={this.showAlert} className='inner-container'>
                            <img className='btn-logo' src={TrashBin} alt='Trashbin logo'/>
                            <p className='btn-name'>Delete</p>
                        </button>
                    </div>
                </div>
                <div className='chats-container'>
                    <div className='from-row'>
                        <div className='image-message-container'>
                            <div className='message-container'>
                                <p className='chats'>Hello!</p>
                            </div>
                            <div className='message-container'>
                                <p className='chats'>Yes, my order according to application. Thank you</p>
                            </div>
                        </div>
                        <img className='user-img' src={MyImage} alt='My img' />
                    </div>
                    <div className='to-row'>
                        <img className='user-img' src={UserImage} alt='My img' />
                        <div className='to-image-message-container'>
                            <div className='to-message-container'>
                                <p className='to-chats'>Hello!👋</p>
                            </div>
                            <div className='to-message-container'>
                                <p className='to-chats'>Your order according to application yes?</p>
                            </div>
                        </div>
                    </div>
                    <div className='from-row'>
                        <div className='image-message-container'>
                            <div className='message-container'>
                                <p className='chats'>Are you Therese </p>
                            </div>
                        </div>
                        <img className='user-img' src={MyImage} alt='My img' />
                    </div>
                    <div className='to-row'>
                        <img className='user-img' src={UserImage} alt='My img' />
                        <div className='to-image-message-container'>
                            <div className='to-message-container'>
                                <p className='to-chats'>How can I help You?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <MessageInput/>
            </div>
        )
    }
}

export default CurrentChatContainer