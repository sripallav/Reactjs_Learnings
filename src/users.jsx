import React, { useState } from "react";
import axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);

    const getUser = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                window.alert("Error");
            });
    };

    return (
        <div>

            <h1>Users</h1>

            <button onClick={getUser}>
                Get Users
            </button>

            <br />
            <br />

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user => (
                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.address.city}</td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default Users;