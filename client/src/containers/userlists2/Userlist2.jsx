import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './userlist2.css'


const Userlist2 = () => {
    const [users, setUsers] = useState([]);
    const [fbuser, setFbUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        auth.onAuthStateChanged(fbuser => {
            if (fbuser) {
                setFbUser(fbuser);
            } else {
                setFbUser(null);
            }
        });
    }, []);




    const getUsers = async () => {
        const response = await axios.get(`/users`);
        setUsers(response.data);
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
        <div id="data-section" className="kudara__table columns mt-5">
            <div className="kudata__table-tablelist">
                <div className="kudara__table-heading">
                    <h1 className="gradient__text">Data List</h1>
                </div>
                {fbuser ? (<>
                    {fbuser.email === 'indarya666@gmail.com' ? (
                        <>
                            <Link to="add" className="button is-success">
                                Add New
                            </Link>
                            <Table className="table is-striped is-fullwidth mt-2">
                                <Thead>
                                    <Tr>
                                        <Th>No</Th>
                                        <Th>Name</Th>
                                        <Th>Email</Th>
                                        <Th>Nilai CO</Th>
                                        <Th>Nilai CO2</Th>
                                        <Th>Negara</Th>
                                        <Th>Kota</Th>
                                        <Th>dateTaken</Th>
                                        <Th>Actions</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {users.map((user, index) => (
                                        <Tr key={user._id}>
                                            <Td>{index + 1}</Td>
                                            <Td>{user.userName}</Td>
                                            <Td>{user.userEmail}</Td>
                                            <Td>{user.displayCO} , {user.showStatusCO}</Td>
                                            <Td>{user.displayCO2} , {user.showStatusCO2}</Td>
                                            <Td>{user.country}</Td>
                                            <Td>{user.kota}</Td>
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
                        </>

                    ) : (
                        <>
                            <Table className="table is-striped is-fullwidth mt-2">
                                <Thead>
                                    <Tr>
                                        <Th>No</Th>
                                        <Th>Nilai CO</Th>
                                        <Th>Nilai CO2</Th>
                                        <Th>Negara</Th>
                                        <Th>Kota</Th>
                                        <Th>dateTaken</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {users.map((user, index) => (
                                        <Tr key={user._id}>
                                            <Td>{index + 1}</Td>
                                            <Td>{user.displayCO} , {user.showStatusCO}</Td>
                                            <Td>{user.displayCO2} , {user.showStatusCO2}</Td>
                                            <Td>{user.country}</Td>
                                            <Td>{user.kota}</Td>
                                            <Td>{user.dateTaken}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </>
                    )}
                </>) : (
                    <>
                        <Table className="table is-striped is-fullwidth mt-2">
                            <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Nilai CO</Th>
                                    <Th>Nilai CO2</Th>
                                    <Th>Negara</Th>
                                    <Th>Kota</Th>
                                    <Th>dateTaken</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users.map((user, index) => (
                                    <Tr key={user._id}>
                                        <Td>{index + 1}</Td>
                                        <Td>{user.displayCO} , {user.showStatusCO}</Td>
                                        <Td>{user.displayCO2} , {user.showStatusCO2}</Td>
                                        <Td>{user.country}</Td>
                                        <Td>{user.kota}</Td>
                                        <Td>{user.dateTaken}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </>
                )
                }


            </div>
        </div>
    );
};

export default Userlist2;