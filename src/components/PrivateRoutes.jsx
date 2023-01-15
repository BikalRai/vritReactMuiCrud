import Dashboard from './Dashboard';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import CreateNewStaff from './CreateNewStaff';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import StaffDetails from './StaffDetails';

const PrivateRoutes = ({ setIsLoggedIn, navigate, isLoggedIn }) => {
    // original state values
    const [editDetails, setEditDetails] = useState({
        edit: false,
        values: { firstName: '', middleName: '', lastName: '', phone: '' },
    });

    //loading state
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Routes>
                {isLoggedIn ? (
                    <>
                        {/*dashboard route*/}
                        <Route
                            path="/dashboard"
                            element={
                                <Dashboard
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            }
                        />
                        {/*about us page route*/}
                        <Route path="/about-us" element={<AboutUs />} />

                        {/*staff details route*/}
                        <Route
                            path="/staff-details"
                            element={
                                <StaffDetails
                                    setEditDetails={setEditDetails}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            }
                        />

                        {/*create staff page route*/}
                        <Route
                            path="/create-staff"
                            element={
                                <CreateNewStaff editDetails={editDetails} />
                            }
                        />
                    </>
                ) : (
                    <>
                        {/*home page route*/}
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            }
                        />

                        {/*register page route*/}
                        <Route
                            path="/register"
                            element={<Register navigate={navigate} />}
                        />

                        {/*login page route*/}
                        <Route
                            path="/login"
                            element={
                                <Login
                                    navigate={navigate}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            }
                        />
                    </>
                )}
            </Routes>
        </>
    );
};

export default PrivateRoutes;
