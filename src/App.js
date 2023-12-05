import Navbar from './components/Navbar'
import AllChatsContainer from './components/AllChatsContainer'
import CurrentChatContainer from './components/CurrentChatContainer'
import ContactUs from './components/ContactUs'

import './App.css';

function App() {
  return (
    <div className="app">
      <div className='small-navbar-container'>
        <Navbar/>
      </div>
      <div className='main-container'>
        <AllChatsContainer/>
        <CurrentChatContainer/>
      </div>
      <div className='contact-us-section'>
        <ContactUs/>
      </div>
    </div>
  );
}

export default App;
