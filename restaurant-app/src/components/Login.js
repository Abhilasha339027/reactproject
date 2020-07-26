import React, { Component } from 'react';
import NavBar from "./NavBar"
class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            password: null,
        }
    }
    login() {
        console.warn(this.state)
        fetch('http://localhost:3000/login?q=' + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                localStorage.setItem('login', JSON.stringify(resp))
                if (resp.length > 0) {
                    console.warn(this.props.history.push('list'))
                }
                else {
                    alert("Please check the Username and Password")
                }
            })
        })
    }
    render() {
        return (
            <div className="black">
                <NavBar />
                <p className="welcome">WELCOME :)</p>
                <div className="abhi">
                    <div className="card">
                        <p className="bigblue">LOGIN</p>
                        <hr></hr><br></br>
                        
                        <input className="input" type="text" name="Username" autoComplete="off" placeholder="Username" onChange={(event) => this.setState({ name: event.target.value })} /><br></br><br></br>
                        <input className="input" type="password" name="Username" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} /><br></br><br></br>
                        <button className="button" onClick={() => { this.login() }}>LOGIN</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;