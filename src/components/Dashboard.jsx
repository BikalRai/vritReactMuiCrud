import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Pagination,
    Skeleton,
    Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostSkeleton from './PostSkeleton';

const Dashboard = ({ isLoading, setIsLoading }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [colsPerPage, setColsPerPage] = useState(6);

    const getPostData = () => {
        setIsLoading(true);
        axios
            .get('https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts')
            .then(({ data }) => {
                setPosts(data);
                setIsLoading(false);
            });
    };

    // setting page
    const pageHandler = (e, newPage) => {
        setPage(newPage);
    };

    console.log(posts, 'posts');
    useEffect(() => {
        getPostData();
    }, []);
    return (
        <>
            {isLoading ? (
                <PostSkeleton />
            ) : (
                <Box pt={15} sx={{ maxWidth: '80%', margin: 'auto' }}>
                    <Typography mb={5} variant="h3">
                        Staff
                    </Typography>
                    <Grid container justifyContent="space-evenly">
                        {posts
                            .slice(
                                page * colsPerPage - colsPerPage,
                                page * colsPerPage
                            )
                            .map((post, index) => {
                                return (
                                    <Grid item key={index}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={
                                                    isLoading ? (
                                                        <Skeleton />
                                                    ) : (
                                                        post?.post_image
                                                    )
                                                }
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {post?.post_name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Lizards are a widespread
                                                    group of squamate reptiles,
                                                    with over 6,000 species,
                                                    ranging across all
                                                    continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">
                                                    Share
                                                </Button>
                                                <Button size="small">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                    </Grid>
                    <Grid>
                        <Pagination
                            onChange={pageHandler}
                            count={Math.ceil(posts.length / colsPerPage)}
                            showFirstButton
                            showLastButton
                        />
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default Dashboard;
