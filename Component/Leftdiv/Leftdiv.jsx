import React from 'react';
import './Leftdiv.css';
import logo from '../../src/assets/images/logo.svg'
import arrow from '../../src/assets/images/icon-arrow.svg'
function Leftdiv() {
    return (
        <div id="leftdiv">
            <img id='logo' src={logo} />
            <h1 id='we'>WE'RE</h1>
            <h1>COMING SOON</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <div id='mail'>
            <input value="Email Address"/>
            <button>
                <img src={arrow}  />
            </button>
            </div>
        </div>
    );
}

export default Leftdiv;
