import {
    Alert,
    Button,
    FormControl,
    Grid,
    Icon,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

const Login = ({ navigate, setIsLoggedIn }) => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
    });

    // state to toggle password type
    const [hidden, setHidden] = useState(true);
    const [type, setType] = useState('password');

    // state for error
    const [error, setError] = useState(false);

    //function to handle username
    const handleUsername = ({ target: { value } }) => {
        setUserDetails((prev) => {
            return { ...prev, username: value.toLowerCase() };
        });
    };

    //function to handle password
    const handlePassword = ({ target: { value } }) => {
        setUserDetails((prev) => {
            return { ...prev, password: value.toLowerCase() };
        });
    };

    //function to handle visiblity of password
    const handleVisibilty = () => {
        if (hidden) {
            setHidden(false);
            setType('text');
        } else {
            setHidden(true);
            setType('password');
        }
    };

    //function to handle submit
    const handleSubmit = () => {
        if (
            userDetails?.username === 'sam' &&
            userDetails?.password === '1234'
        ) {
            setIsLoggedIn(true);
            navigate('/dashboard');
            setError(false);
        } else {
            setError(true);
        }
    };

    console.log(userDetails, 'login form');

    return (
        <>
            <Box
                py={15}
                component="form"
                sx={{ maxWidth: '350px', margin: 'auto' }}
            >
                <LoginIcon fontSize="large" />
                <Typography mb={3} variant="h3">
                    Login
                </Typography>
                <Grid container flexDirection="column" gap={5}>
                    <Grid item>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Username</InputLabel>
                            <OutlinedInput
                                type="text"
                                id="username"
                                value={userDetails?.username}
                                onChange={handleUsername}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon>
                                            <PersonIcon />
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                type={type}
                                id="password"
                                value={userDetails?.password}
                                onChange={handlePassword}
                                endAdornment={
                                    <InputAdornment
                                        position="end"
                                        onClick={handleVisibilty}
                                    >
                                        <IconButton>
                                            {hidden ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    {error && (
                        <Alert severity="error">
                            Username or Password does not exist
                        </Alert>
                    )}
                    <Grid item>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleSubmit()}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Login;
