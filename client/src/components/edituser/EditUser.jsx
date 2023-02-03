import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../login/Login.module.css';

const EditUser = () => {
    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [showStatusCO, setshowStatusCO] = useState("NORMAL");
    const [showStatusCO2, setshowStatusCO2] = useState("NORMAL");
    const [displayCO, setdisplayCO] = useState("");
    const [displayCO2, setdisplayCO2] = useState("");
    const [lat, setlat] = useState("");
    const [long, setlong] = useState("");
    const [country, setcountry] = useState("");
    const [kota, setkota] = useState("");
    const [kecamatan, setkecamatan] = useState("");
    const [kelurahan, setkelurahan] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`/users/${id}`);
        setuserName(response.data.userName);
        setuserEmail(response.data.userEmail);
        setshowStatusCO(response.data.showStatusCO);
        setshowStatusCO2(response.data.showStatusCO2);
        setdisplayCO(response.data.displayCO);
        setdisplayCO2(response.data.displayCO2);
        setlat(response.data.lat);
        setlong(response.data.long);
        setcountry(response.data.country);
        setkota(response.data.kota);
        setkecamatan(response.data.kecamatan);
        setkelurahan(response.data.kelurahan);
    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`/users/${id}`, {
                userName,
                userEmail,
                displayCO,
                displayCO2,
                showStatusCO,
                showStatusCO2,
                lat,
                long,
                country,
                kota,
                kecamatan,
                kelurahan
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto my-auto">
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{ width: "60%" }}>

                    <div className="title flex flex-col items-center">
                        <h4 className='gradient__text text-5xl font-bold'>Edit Data</h4>
                    </div>

                    <form className='py-1' onSubmit={updateUser}>

                        <div className="textbox flex flex-col items-center gap-1">
                            <div className="box2 flex w-3/4 gap-10">
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Name</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={userName}
                                            onChange={(e) => setuserName(e.target.value)}
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Email</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={userEmail}
                                            onChange={(e) => setuserEmail(e.target.value)}
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box2 flex w-3/4 gap-10">
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Value CO</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={displayCO}
                                            onChange={(e) => setdisplayCO(e.target.value)}
                                            placeholder="Value CO"
                                        />
                                    </div>
                                </div>
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Value CO2</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={displayCO2}
                                            onChange={(e) => setdisplayCO2(e.target.value)}
                                            placeholder="Value CO2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="box2 flex w-3/4 gap-10">
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Status CO</label>
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select
                                                value={showStatusCO}
                                                onChange={(e) => setshowStatusCO(e.target.value)}
                                            >
                                                <option value="NORMAL">NORMAL</option>
                                                <option value="WASPADA">WASPADA</option>
                                                <option value="BAHAYA">BAHAYA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Status CO2</label>
                                    <div className="control">
                                        <div className="select">
                                            <select
                                                value={showStatusCO2}
                                                onChange={(e) => setshowStatusCO2(e.target.value)}
                                            >
                                                <option value="NORMAL">NORMAL</option>
                                                <option value="WASPADA">WASPADA</option>
                                                <option value="BAHAYA">BAHAYA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="box2 flex w-3/4 gap-10">
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Latitude</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={lat}
                                            onChange={(e) => setlat(e.target.value)}
                                            placeholder="Latitude"
                                        />
                                    </div>
                                </div>
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Longitude</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={long}
                                            onChange={(e) => setlong(e.target.value)}
                                            placeholder="Longitude"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box2 flex w-3/4 gap-10">
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Country</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={country}
                                            onChange={(e) => setcountry(e.target.value)}
                                            placeholder="Country"
                                        />
                                    </div>
                                </div>
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Kota</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={kota}
                                            onChange={(e) => setkota(e.target.value)}
                                            placeholder="Kota"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box2 flex w-3/4 gap-10">
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Kecamatan</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={kecamatan}
                                            onChange={(e) => setkecamatan(e.target.value)}
                                            placeholder="Kecamatan"
                                        />
                                    </div>
                                </div>
                                <div className="field px-2">
                                    <label className="gradient__text text-xl">Kelurahan</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={kelurahan}
                                            onChange={(e) => setkelurahan(e.target.value)}
                                            placeholder="Kelurahan"
                                        />
                                    </div>
                                </div>
                            </div>


                            <button className={styles.btn} type='submit'>Add Data</button>
                        </div>




                    </form>
                   

                </div>
            </div>
        </div>



    )
};

export default EditUser;