import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Navbar, AddUser, EditUser, Login, Register, Reset, Recovery, PageNotFound, Password, Profile } from './components';
import { Footer, Blog, Possibility, Features, Whatkudara, Header, UserList2, Team, Sidebar } from './containers';
import './App.css';

import { AuthorizeUser, ProtectRoute } from './middleware/auth'

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <div className="gradient__bg">
                            <Navbar />
                            <Header />
                        </div>
                        <UserList2 />
                        <Whatkudara />
                        <Features />
                        <Footer />
                    </div>
                }
                />
                <Route path="add" element={<AddUser />} />
                <Route path="edit/:id" element={<EditUser />} />
                <Route path="login" element={<Login />} />
                <Route path="password" element={<Password />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="recovery" element={<Recovery />} />
                <Route path="reset" element={<Reset />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </BrowserRouter>

    );
}

export default App;
