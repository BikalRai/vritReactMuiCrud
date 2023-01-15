import React from 'react';
import {
    AppBar,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Toolbar,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ setIsLoggedIn, isLoggedIn, navigate }) => {
    //function to logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };
    return (
        <>
            {isLoggedIn ? (
                <AppBar color="error">
                    <Toolbar>
                        <Box
                            sx={{
                                // backgroundColor: 'red',
                                width: '80%',
                                margin: 'auto',
                            }}
                        >
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{ width: '100%' }}
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Grid item>
                                            <DashboardIcon fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <Typography>Brand</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        spacing={3}
                                    >
                                        <Grid item>
                                            <Typography
                                                component={Link}
                                                to="/dashboard"
                                                color="#fff"
                                                underline="hover"
                                            >
                                                Home
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                component={Link}
                                                to="/about-us"
                                                color="#fff"
                                                underline="hover"
                                            >
                                                About
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                component={Link}
                                                to="/staff-details"
                                                color="#fff"
                                                underline="hover"
                                            >
                                                Staff
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item>
                                            <FormControl
                                                sx={{
                                                    m: 1,
                                                    width: '25ch',
                                                    outline: '1px solid #fff',
                                                }}
                                                variant="outlined"
                                                size="small"
                                            >
                                                <InputLabel>Search</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-search"
                                                    type="search"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton>
                                                                <SearchIcon color="#fff" />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Search"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                sx={{ color: '#fff' }}
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
            ) : (
                <AppBar color="error">
                    <Toolbar>
                        <Box
                            sx={{
                                // backgroundColor: 'red',
                                width: '80%',
                                margin: 'auto',
                            }}
                        >
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-evenly"
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Grid item>
                                            <DashboardIcon fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6">
                                                Brand
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container columnGap={2}>
                                        <Grid item>
                                            <Typography
                                                variant="body1"
                                                component={Link}
                                                to="/login"
                                                color="#fff"
                                            >
                                                Login
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="body1"
                                                component={Link}
                                                to="/register"
                                                color="#fff"
                                            >
                                                Register
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
};

export default Header;
