import React, { Component } from 'react';
import { Table, tbody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar"
import one from "./one.jpeg"

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getDelete()
    }
    getDelete() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })

            })

        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been deleted")
                this.getDelete()
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar/>
                <img src={one} alt="img" className="blur" /> 
                <div className="rest3"> 
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr className="list">
                                        <th>No.</th>
                                        <th> Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Opertion</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr className="list">
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td ><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                                    <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} /></span></td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div> :
                        <p>please wait....</p>

                }
            </div>
            </div>
        );
    }
}

export default RestaurantList;