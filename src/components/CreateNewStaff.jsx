import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNewStaff = ({ editDetails: { edit, values } }) => {
    console.log(values, 'values');
    const [newStaff, setNewStaff] = useState({
        firstName: edit ? values?.firstName : '',
        middleName: edit ? values?.middleName : '',
        lastName: edit ? values.lastName : '',
        phone: edit ? values.phone : '',
    });

    const { firstName, middleName, lastName, phone } = newStaff;
    const navigate = useNavigate();

    //function to post new staff
    const postNewStaff = async () => {
        try {
            await axios.post(
                'https://63c1863699c0a15d28ec247b.mockapi.io/details',
                {
                    firstName,
                    middleName,
                    lastName,
                    phone,
                }
            );

            navigate('/staff-details');
        } catch (error) {
            console.log('Error!!');
        }
    };

    //functon to handle first name
    const handleFirstName = ({ target: { value } }) => {
        setNewStaff((prev) => {
            return { ...prev, firstName: value };
        });
    };

    //function to handle middle name
    const handleMiddleName = ({ target: { value } }) => {
        setNewStaff((prev) => {
            return { ...prev, middleName: value };
        });
    };

    //function to handle last name
    const handleLastName = ({ target: { value } }) => {
        setNewStaff((prev) => {
            return { ...prev, lastName: value };
        });
    };

    // function to handle phone number
    const handlePhone = ({ target: { value } }) => {
        setNewStaff((prev) => {
            return { ...prev, phone: value };
        });
    };

    // function to add
    const addStaff = () => {
        edit ? updateStaff() : postNewStaff();
    };

    //function to update data
    const updateStaff = async () => {
        try {
            await axios.put(
                `https://63c1863699c0a15d28ec247b.mockapi.io/details/${values.id}`,
                {
                    firstName,
                    middleName,
                    lastName,
                    phone,
                }
            );

            navigate('/staff-details');
        } catch (error) {
            console.log('error!!');
        }
    };

    console.log(newStaff, 'making staff');
    return (
        <>
            <Box
                component="form"
                autoComplete="off"
                sx={{
                    padding: '5rem',
                    maxWidth: '800px',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    margin: '5rem auto',
                    boxShadow: '3px 5px 10px',
                }}
            >
                <Typography variant="h4" mb={5}>
                    Add new staff
                </Typography>
                <Grid justifyContent="center" container spacing={3}>
                    <Grid item>
                        <TextField
                            onChange={handleFirstName}
                            value={firstName}
                            size="small"
                            color="error"
                            // sx={{ outline: '1px solid red' }}
                            label="First Name"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            onChange={handleMiddleName}
                            value={middleName}
                            size="small"
                            color="error"
                            // sx={{ outline: '1px solid red' }}
                            label="Middle Name"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            onChange={handleLastName}
                            value={lastName}
                            size="small"
                            color="error"
                            // sx={{ outline: '1px solid red' }}
                            label="Last Name"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            onChange={handlePhone}
                            value={phone}
                            size="small"
                            color="error"
                            // sx={{ outline: '1px solid red' }}
                            label="Contact number"
                        />
                    </Grid>
                </Grid>
                <Grid py={5}>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ padding: '0.5rem 2.5rem' }}
                        onClick={() => addStaff()}
                    >
                        {edit ? `Update` : `Add`}
                    </Button>
                </Grid>
            </Box>
        </>
    );
};

export default CreateNewStaff;
