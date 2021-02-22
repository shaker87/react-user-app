import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const {name, username, email, phone, website} = user;


    const handleChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    console.log(user);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/users', user)
        history.push('/')

    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="name" value={name} placeholder="Enter name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="username" value={username} placeholder="Enter user name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="email" value={email} placeholder="Enter email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="phone" value={phone} placeholder="Enter phone number" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="website" value={website} placeholder="Enter website" className="form-control"/>
                        </div>
                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;