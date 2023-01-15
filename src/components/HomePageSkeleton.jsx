import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HomePageSkeleton = () => {
    return (
        <>
            <Box sx={{ height: '100vh', width: '100%' }}>
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    sx={{ height: '100%', width: '90%', margin: ' auto' }}
                />
            </Box>
        </>
    );
};

export default HomePageSkeleton;
