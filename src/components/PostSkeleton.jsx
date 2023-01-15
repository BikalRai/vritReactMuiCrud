import { Grid, Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PostSkeleton = () => {
    return (
        <>
            <Grid pt={15} container sx={{ width: '80%', margin: 'auto' }}>
                <Grid item>
                    <Box sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                        <Skeleton
                            variant="rectangular"
                            width={400}
                            height={200}
                        />

                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                            ></Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                        </Box>

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                        <Skeleton
                            variant="rectangular"
                            width={400}
                            height={200}
                        />

                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                            ></Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                        </Box>

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                        <Skeleton
                            variant="rectangular"
                            width={400}
                            height={200}
                        />

                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                            ></Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                        </Box>

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid pt={15} container sx={{ width: '80%', margin: 'auto' }}>
                <Grid item>
                    <Box sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                        <Skeleton
                            variant="rectangular"
                            width={400}
                            height={200}
                        />

                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                            ></Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                        </Box>

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                        <Skeleton
                            variant="rectangular"
                            width={400}
                            height={200}
                        />

                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                            ></Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                        </Box>

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ width: 400, marginRight: 0.5, my: 5 }}>
                        <Skeleton
                            variant="rectangular"
                            width={400}
                            height={200}
                        />

                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                            ></Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            ></Typography>
                        </Box>

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default PostSkeleton;
