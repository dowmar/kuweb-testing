import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './userlist2.css'


const Userlist2 = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get(`/users`);
        setUser(response.data);
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="kudara__table columns mt-5">
            <div className="kudata__table-tablelist">
                <div className="kudara__table-heading">
                    <h1 className="gradient__text">Data List</h1>
                </div>
                <Link to="add" className="button is-success">
                    Add New
                </Link>
                <Table className="table is-striped is-fullwidth mt-2">
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Name</Th>
                            <Th>valueCO</Th>
                            <Th>valueCO2</Th>
                            <Th>statusCO</Th>
                            <Th>statusCO2</Th>
                            <Th>Email</Th>
                            <Th>dateTaken</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user, index) => (
                            <Tr key={user._id}>
                                <Td>{index + 1}</Td>
                                <Td>{user.userName}</Td>
                                <Td>{user.displayCO}</Td>
                                <Td>{user.displayCO2}</Td>
                                <Td>{user.showStatusCO}</Td>
                                <Td>{user.showStatusCO2}</Td>
                                <Td>{user.userEmail}</Td>
                                <Td>{user.dateTaken}</Td>
                                <Td>
                                    <Link
                                        to={`edit/${user._id}`}
                                        className="button is-info is-small mr-1"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className="button is-danger is-small"
                                    >
                                        Delete
                                    </button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </div>
    );
};

export default Userlist2;