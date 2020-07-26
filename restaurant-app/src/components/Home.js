import React, { Component } from 'react';
import NavBar from "./NavBar"
import one from "./one.jpeg"
class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <img src={one} alt="img"  className="blur" />
                <h1 className="home">HOME</h1>
                <div className="about">
                    <br></br>
                    <h1>About Us</h1>
                    <hr className="hr"></hr>
                    <p>The best restaurant websites have one thing in common; beautiful presentation.
                    An attractive design with excellent imagery can bring you many customers.
                    Usability is important. But it’s the mouth-watering visuals that make these sites great.
                    The visual presentation should not distract your visitors from getting key information, however.
                    Your locations, menu items and opening hours should be easily accessible.
                   Below we have listed some of our favourite restaurant websites for you to use as design inspiration.
                   </p>
                   <br></br>
                </div>
            </div>
        );
    }
}

export default Home;