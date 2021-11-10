import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
          <div className='BA'>
              <h1>B A</h1><p>Consumer Reports</p>
          </div>
           <div className="list">
         <list>
         <h4>Member Support</h4>
           <p>Contact US</p>
           <p>Account Settings</p>
           <p>What is in Membership</p>
           <p>Make a Donation</p>
           <p>New Sletter</p>
           <p>Give a GIft</p>
         </list>

         <list>
         <h4>About US</h4>
           <p>About Us</p>
           <p>Career Opportunity</p>
           <p>Media Room</p>
           <p>Advocacy</p>
           <p>CR Recommended Program</p>
           <p>Data Intelligence</p>
         </list>

         <list>
         <h4>Magazine and Book</h4>
           <p>Current</p>
           <p>CR Digital Archive</p>
           <p>5 Years</p>
           <p>CR Stone</p>
           </list>

         <list>
         <h4>Product Review</h4>
           <p>Appliances</p>
           <p>Babies and Kid</p>
           <p>Electronics</p>
           <p>Home Garden</p>
           <p>Money</p>
           <p>A-Z Index</p>
         </list>
           </div>

        </div>
    );
};

export default Footer;    