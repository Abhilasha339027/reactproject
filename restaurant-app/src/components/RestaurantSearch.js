import React, { Component } from 'react';
import NavBar from "./NavBar"
import one from "./one.jpeg"
class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: false
        }
    }
    search(key) {
        console.warn(key)
        fetch('http://localhost:3000/restaurant?q=' + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    this.setState({ searchData: resp,noData:false })
                }
                else {
                    this.setState({noData:true, searchData:null})
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar/>
                <img src={one} alt="img"  className="blur" />
                <div className="rest1"> 
                <p className="search">Restaurant Search</p><br></br><br></br>
                <input className="input1" type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search" />
                <div>{
                    this.state.searchData ?
                        <div>{
                            this.state.searchData.map((item) =>
                                <div>{item.name}</div>
                            )
                        }
                        </div>
                        : ""
                }
                {
                    this.state.noData?<h3>No Data Found</h3>:null
                }
                </div>
               </div> 
            </div>
        );
    }
}

export default RestaurantSearch;