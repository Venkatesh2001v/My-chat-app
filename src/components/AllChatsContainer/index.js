import React,{Component} from 'react'

import './index.css'

import ChatIcon from '../../assests/Blackchat-icon.svg'
import User1Img from '../../assests/Caressa-img.svg'
import AddLogo from '../../assests/add-icon.svg'


class AllChatsContainer extends Component{

    showAlert = () => {
        window.alert('This application is still under development. Some features are not yet available.');
      };
    
    render(){
        return(
            <div className='allchats-container'>
                <div className='sub-container'>
                    <h1 className='sub-heading'>ALL YOUR CHATS</h1>
                    <div className='chat-image-container'>
                        <img className='chat-icon' src={ChatIcon} alt='Chat icon' />
                        <p className='chat-state'>Chat Images: ON</p>
                    </div>
                    <p className='content'>When a bot sends you images, you will be charged one secondary image</p>
                    <div className='user-details-container1'>
                        <img className='user-img' src={User1Img} alt='User1 img' />
                        <div className='chats-details' >
                            <p className='user-name'>Caressa Jessalin</p>
                            <p className='user-state'>Lorem ipsum dolor sit am...</p>
                        </div>
                    </div>
                    <div className='user-details-container2'>
                        <img className='user-img' src={User1Img} alt='User1 img' />
                        <div >
                            <p className='user-name'>Letty Bride</p>
                            <p className='user-state'>Lorem ipsum dolor sit am...</p>
                        </div>
                    </div>
                </div>
                <hr className='horizontal-line'/>
                <div className='add-new-container'>
                    <button onClick={this.showAlert} className='create-btn'>
                        <img className='add-icon' src={AddLogo} alt='add-icon'/>
                    </button>
                    <p className='add-new-text'>Create new bot</p>
                </div>
            </div>
        )
    }
}

export default AllChatsContainer