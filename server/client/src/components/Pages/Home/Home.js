import './Home.css'
import React from 'react';
import Car from "/Users/rubyosborne/forreal/client/src/images/Car.mp4";

const HomeScreen = () => {
    return (
        <div className="home-page">
        <video autoPlay loop muted >
            <source src={Car} type="video/mp4"></source>
        </video>
        <h1 className="home-title"> A Collaboration of Cool Projects </h1>
        </div>
       
    );
}

export default HomeScreen

