import React from 'react'
import '../App.css';
import './Popup.css'
import Button from './Button';

function Popup(props) {

    const closePopup = () => props.setTrigger(false);

    return (props.trigger) ? (
        <div className='popup-wrapper'>
            <div className='popup-content'>
                <form class="form-container">
                    <h2>Login</h2>
                    <br />
                    <label for="email"><b>Email</b></label> <br />
                    <input type="text" placeholder="Enter Email" name="email" required /> <br />

                    <label for="psw"><b>Password</b></label> <br />
                    <input type="password" placeholder="Enter Password" name="psw" required /> <br />
                    <br />
                    <Button onClick={closePopup} className='popupCancel-btn' buttonStyle='btn--secondary'>Cancel</Button>
                </form>
            </div> 
        </div>
    ) : "";
}

export default Popup;