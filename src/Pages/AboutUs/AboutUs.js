import React from 'react';
import './AboutUs.css';
import image1 from '../../images/AboutUs-images/Rolls-Royce.jpg';
import image2 from '../../images/AboutUs-images/BMW.jpg';
import image3 from '../../images/AboutUs-images/mercedes_vision_avtr.jpg';
import image4 from '../../images/AboutUs-images/Tesla.jpg';

const AboutUs = () => {
    return (
        <div>
           <section className='about'>
           <div data-aos="zoom-in-right">
               <img src={image1} alt=""/>
           </div>
           <div data-aos="zoom-in-left">
               <h2>ROLLS ROYCE</h2>
              <p>The Rolls-Royce brand has been in use since 1906, the Rolls-Royce Motor Cars subsidiary of BMW AG has no direct relationship to Rolls-Royce-branded vehicles produced prior to 2003 other than being a major engine and other supplier prior to 2003. The Bentley Motors Limited subsidiary of Volkswagen AG is the direct successor to Rolls-Royce Motors and various other predecessor entities that produced Rolls-Royce and Bentley branded cars between the foundation of each company and 2003, when the BMW-controlled entity started producing cars under the Rolls-Royce brand.</p>
           </div>
           </section>
           <section className='about'>
           <div data-aos="zoom-in-right">
               <h2>BMW</h2>
              <p>Bayerische Flugzeugwerke AG was formed in 1916. This company was renamed to Bayerische Motoren Werke (BMW) in 1922. However the name BMW dates back to 1913, when the original company to use the name was founded by Karl Rapp (initially as Rapp Motorenwerke GmbH). BMW's first product was a straight-six aircraft engine called the BMW IIIa, designed in the spring of 1917 by engineer Max Friz. Following the end of World War I, BMW remained in business by producing motorcycle engines, farm equipment, household items and railway brakes. The company produced its first motorcycle, the BMW R 32 in 1923.
              </p>
           </div>
           <div data-aos="zoom-in-left">
               <img src={image2} alt=""/>
           </div>
           </section>
           <br/>
           <br/>
           <br/> 
           <hr/>
           <br/>
           <br/>
           <section className='about'>
           <div data-aos="zoom-in-right">
               <img src={image3} alt=""/>
           </div>
           <div data-aos="zoom-in-left">
               <h2>The Verge Mercedes-Benz an Avatar</h2>
              <p>As the VISION AVTR is the concept car and is in the development phase so, the Mercedes VISION AVTR price is not disclosed officially. However, it is expected to compete with the Tesla Model Y and the pricing may start with $39,000 when it becomes available in late 2021.Gottlieb Daimler was born on 17 March 1834 in Schorndorf. After training as a gunsmith and working in France, he attended the Polytechnic School in Stuttgart from 1857 to 1859. After completing various technical activities in France as well as England, later he started working as a draftsman in Geislingen in 1862. At the end of 1863, he was appointed workshop inspector at a machine tool factory in Reutlingen, where he met Wilhelm Maybach in 1865.[</p>
           </div>
           </section>
           <section className='about'>
           <div data-aos="zoom-in-right">
               <img src={image4} alt=""/>
           </div>
           <div data-aos="zoom-in-left">
               <h2>TESLA</h2>
              <p>An Electric car or battery electric car is an automobile that is propelled by one or more electric motors, using energy stored in batteries. Compared to internal combustion engine (ICE) vehicles, electric cars are quieter, have no exhaust emissions, and lower emissions overall.[1] In the United States and the European Union, as of 2020, the total cost of ownership of recent electric vehicles is cheaper than that of equivalent ICE cars, due to lower fueling and maintenance costs.[2][3] Charging an electric car can be done at a variety of charging stations; these charging stations can be installed in both houses and public areas.</p>
           </div>
           </section>
           
        </div>
    );
};

export default AboutUs;