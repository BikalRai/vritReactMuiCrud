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
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Register = ({ navigate }) => {
    // state for register userinfo
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    //state for errors
    const [emptyError, setEmptyError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // state for password visibility
    const [hidden, setHidden] = useState(true);
    const [type, setType] = useState('text');

    //function to handle username
    const userHandle = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, username: value };
        });
    };

    //function to handle password
    const passwordHandle = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, password: value };
        });
    };

    //function to handle confirm password
    const confirmPasswordHandle = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, confirmPassword: value };
        });
    };

    //function to handle password type
    const handlePasswordInputType = () => {
        if (hidden) {
            setHidden(false);
            setType('text');
        } else {
            setHidden(true);
            setType('password');
        }
    };

    //function to validate
    const submitHandle = () => {
        if (userInfo?.username !== '' && userInfo?.password !== '') {
            if (userInfo?.password === userInfo?.confirmPassword) {
                setEmptyError(false);
                setPasswordError(false);
                navigate('/login');
            } else {
                setPasswordError(true);
            }
        } else {
            setEmptyError(true);
        }
    };

    console.log(userInfo, 'Userinfo');

    return (
        <>
            <Box
                component="form"
                py={10}
                sx={{ maxWidth: '350px', margin: 'auto' }}
            >
                <AppRegistrationIcon fontSize="large" />
                <Typography variant="h3" mb={3}>
                    Register
                </Typography>
                <Grid container flexDirection="column" gap={3}>
                    <Grid>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <OutlinedInput
                                type="text"
                                id="username"
                                onChange={userHandle}
                                value={userInfo?.username}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon>
                                            <PersonIcon />
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {emptyError && userInfo?.username === '' && (
                            <Alert severity="error">
                                Username field must not be empty!
                            </Alert>
                        )}
                    </Grid>
                    <Grid>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                type={type}
                                id="password"
                                onChange={passwordHandle}
                                value={userInfo?.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handlePasswordInputType}
                                        >
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
                        {emptyError && userInfo?.password === '' && (
                            <Alert severity="error">
                                Password field must not be empty!
                            </Alert>
                        )}
                    </Grid>
                    <Grid>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Confirm password</InputLabel>
                            <OutlinedInput
                                type={type}
                                id="cpassword"
                                onChange={confirmPasswordHandle}
                                value={userInfo?.confirmPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handlePasswordInputType}
                                        >
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
                        {emptyError && userInfo?.confirmPassword === '' && (
                            <Alert severity="error">
                                Confirm password field must not be empty!
                            </Alert>
                        )}
                        {passwordError &&
                            userInfo?.password !==
                                userInfo?.confirmPassword && (
                                <Alert severity="error">
                                    The two password does not match!
                                </Alert>
                            )}
                    </Grid>
                    <Grid>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => submitHandle()}
                        >
                            Register
                        </Button>
                    </Grid>
                    <Grid>
                        <Grid container justifyContent="flex-end">
                            <Typography
                                variant="body1"
                                component={Link}
                                color="#990000"
                                to="/login"
                            >
                                Already have an account? Login
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Register;
