import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    const {id} = useParams();
    const history =  useHistory();
    const [editUser, setEditUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
      })

    const {name, email, phone, username, website} = editUser;


    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`)
        console.log(result.data)
        setEditUser(result.data)
    }

    

    const handleChange = e => {
        setEditUser({...editUser, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${id}`, editUser );

        history.push("/")
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="name" value={name} placeholder="Enter name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="username" value={username} placeholder="Enter user name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="email" value={email} placeholder="Enter email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="phone" value={phone} placeholder="Enter phone number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="website" value={website} placeholder="Enter website" className="form-control" />
                        </div>
                        <button className="btn btn-primary btn-block"> Update User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;