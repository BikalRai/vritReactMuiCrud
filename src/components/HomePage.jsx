import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import HomePageSkeleton from './HomePageSkeleton';

const HomePage = ({ isLoading, setIsLoading }) => {
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <main>
                {isLoading ? (
                    <HomePageSkeleton />
                ) : (
                    <Box
                        pt={10}
                        sx={{
                            // backgroundColor: 'red',
                            height: '100vh',
                            width: '100%',
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")',
                            backgroundSize: '100%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Grid
                            container
                            justifyContent="center"
                            // alignItems="center"
                            sx={{
                                height: '100%',
                                width: '100%',
                            }}
                            gap={6}
                            flexDirection="column"
                        >
                            <Grid item>
                                <Typography variant="h2" color="#fff">
                                    Landing page header
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3" color="#fff">
                                    Slogan
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </main>
        </>
    );
};

export default HomePage;
