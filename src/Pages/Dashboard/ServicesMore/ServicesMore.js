import React from 'react';
import './ServiceMore.css'
import image1 from '../../../images/service-more/Audi-1.jpg';
import image2 from '../../../images/service-more/audi-2.jpg';
import image3 from '../../../images/service-more/bmw-1.jpg';
import image4 from '../../../images/service-more/bmw-2.jpg';
import image5 from '../../../images/service-more/bmw-3.jpg';
import image6 from '../../../images/service-more/bmw-4.jpg';
import image7 from '../../../images/service-more/marcedeze-1.jpg';
import image8 from '../../../images/service-more/toyota-1.jpg';
import image9 from '../../../images/service-more/toyota-2.jpg';
import image10 from '../../../images/service-more/toyota-3.jpg';
import { Link } from 'react-router-dom';


const ServicesMore = () => {
    return (
        <div className='More-service' data-aos="zoom-out-down">
            <div className='single-products'>
                <img src={image1} alt=""/>
                <h3>Audi H500ja</h3>
                <p>$50000</p>
                 <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image2} alt=""/>
                <h3>Audi 877W2oo</h3>
                <p>$36200</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image3} alt=""/>
                <h3>BMW 2000HP</h3>
                <p>$29999</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image4} alt=""/>
                <h3>BMW 450jkl</h3>
                <p>$58000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image5} alt=""/>
                <h3>BMW 3000HP</h3>
                <p>$56000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image6} alt=""/>
                <h3>BMW 560HP</h3>
                <p>$23000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image7} alt=""/>
                <h3>Marcedez-Benz</h3>
                <p>$38000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image8} alt=""/>
                <h3>Toyota G500Hp</h3>
                <p>$15000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image9} alt=""/>
                <h3>Toyota HP400A</h3>
                <p>$20000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
            <div className='single-products'>
                <img src={image10} alt=""/>
                <h3>Toyota 600AFP</h3>
                <p>$45000</p>
                <Link to="/bookingModal"><button>BOOKING</button></Link>
            </div>
        </div>
    );
};

export default ServicesMore;