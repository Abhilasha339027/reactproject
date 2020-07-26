import React, { Component } from 'react';
import NavBar from "./NavBar"
import one from "./one.jpeg"
class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,
            id:null

        }
    }
   componentDidMount(){
       fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response)=>{
        response.json().then((result)=>{
            console.warn(result)
            this.setState({
                name:result.name,
                email:result.email,
                id:result.id,
                rating:result.rating,
                address:result.address

            })

        })

    })
   }
   update(){
    fetch("http://localhost:3000/restaurant/"+this.state.id,{
        method:"put",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
result.json().then((resp)=>{
alert("Restaurant has been updated")
})
    })
   }
    render() {
        return (
            <div>
                <NavBar/>
                <img src={one} alt="img" className="blur" />
                <div className="rest4">
                 <p className="create">Restaurant Update</p>
                <div className="abhi1">
        
                <input className="input2" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name" value={this.state.name} /><br></br><br></br>
               <input className="input2" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" value={this.state.email} /><br></br><br></br>
                <input className="input2" onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating" value={this.state.rating} /><br></br><br></br>
                <input className="input2" onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant Address" value={this.state.address} /><br></br><br></br>
                <button className="button1" onClick={()=>{this.update()}}>Update Restaurant</button>
            </div>
           </div>
        </div>
        );
    }
}

export default RestaurantUpdate;