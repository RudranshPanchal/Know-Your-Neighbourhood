import React, { Component } from 'react';
import './Home.css';
import store from '../img/store.png';


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">All Nearby Stores</h1>
                    <div className="container">
                        <img src={store} className="photo" alt="Online Store"></img>
                    </div>
            </div>
        )
    }
}

export default Home;