import React from 'react';
import { Breadcrumbs, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const Footer = () => {
    return (
        <>
            <Grid>
                <Typography variant="h6">Footer</Typography>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                color="inherit"
                                to="/"
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                to="/about"
                            >
                                <DataUsageIcon
                                    sx={{ mr: 0.5 }}
                                    fontSize="inherit"
                                />
                                About
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                to="/staff-details"
                            >
                                <PeopleIcon
                                    sx={{ mr: 0.5 }}
                                    fontSize="inherit"
                                />
                                Staff
                            </Link>
                        </Breadcrumbs>
                    </Grid>
                </Grid>
                <Typography variant="body2">{`Copyright © ${new Date().getFullYear()}`}</Typography>
            </Grid>
        </>
    );
};

export default Footer;
