import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';


const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate');

    const nameArray = [''];

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    hovon
                    <br />
                    Web developer
                </h1>
                <h2>Frontend Developer / JavaScript Programmer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;