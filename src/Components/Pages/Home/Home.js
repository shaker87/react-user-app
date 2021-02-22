import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data.reverse())
    }

    const deleteUser = async id => {
      await axios.delete(`http://localhost:5000/users/${id}`)
      loadUsers()
    }

    console.log(user)
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border-shadow text-center">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                                View
                                            </Link>
                                            <Link
                                                class="btn btn-outline-primary mr-2"
                                                to={`/users/edit/${user.id}`}
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                class="btn btn-danger"
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;