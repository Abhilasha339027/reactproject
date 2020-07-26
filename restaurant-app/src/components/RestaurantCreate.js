import React, { Component } from 'react';
import NavBar from "./NavBar"
import one from "./one.jpeg"

class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,

        }
    }
    create(){
        fetch("http://localhost:3000/restaurant",{
            method:"post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
result.json().then((resp)=>{
    alert("Restaurant has been submitted")

}
)
        }
        )
    }
    render() {
        return (
            <div>
                <NavBar />
                <img src={one} alt="img" className="blur" /> 
                <div className="rest2">  
            <p className="create"> Restaurant Create</p>
            <div className="abhi1">
                    
            <div>
        
                <input className="input2" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name" /><br></br><br></br>
               <input className="input2"  onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" /><br></br><br></br>
                <input className="input2"  onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating" /><br></br><br></br>
                <input className="input2"  onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant Address" /><br></br><br></br>
                <button className="button1"  onClick={()=>{this.create()}}>Add Restaurant</button></div>
            
            </div>
            </div>
            </div>
        );
    }
}

export default RestaurantCreate;