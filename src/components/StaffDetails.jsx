import {
    Button,
    Grid,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BackspaceIcon from '@mui/icons-material/Backspace';
import StaffSkeleton from './StaffSkeleton';
// import StaffSkeleton from './StaffSkeleton';

const StaffDetails = ({ setEditDetails, isLoading, setIsLoading }) => {
    const [staffDetails, setStaffDetails] = useState([]);
    console.log(staffDetails, 'staff');
    const [rowsPerpage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    // function to get data
    const getData = () => {
        setIsLoading(true);
        axios
            .get('https://63c1863699c0a15d28ec247b.mockapi.io/details')
            .then(({ data }) => {
                console.log(data);
                setStaffDetails(data);
                setIsLoading(false);
            });
    };

    // function to handle page
    const handlePage = (e, newPage) => {
        setPage(newPage);
    };

    // function to navigate to create user
    const createNewStaff = () => {
        navigate('/create-staff');
    };

    // function to handle edit
    const handleEditStaff = (row) => {
        setEditDetails({ edit: true, values: row });
        navigate('/create-staff');
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {isLoading ? (
                <StaffSkeleton />
            ) : (
                <Grid
                    container
                    justifyContent="center"
                    flexDirection="column"
                    py={5}
                    sx={{ margin: '5rem auto', maxWidth: '80%' }}
                >
                    <Grid item>
                        <Button variant="contained" onClick={createNewStaff}>
                            Add new staff
                        </Button>
                    </Grid>
                    <Grid item mt={5} py={2}>
                        <TableContainer component={Paper}>
                            <Table
                                // sx={{ minWidth: 650 }}
                                size="medium"
                                aria-label="a dense table"
                                // padding="checkbox"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.N</TableCell>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Middle Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Contact No.</TableCell>
                                        <TableCell>Actions.</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {staffDetails
                                        .slice(
                                            page * rowsPerpage - rowsPerpage,
                                            page * rowsPerpage
                                        )
                                        .map((row, index) => (
                                            <TableRow
                                                hover
                                                key={row.id}
                                                sx={{
                                                    '&:last-child td, &:last-child th':
                                                        {
                                                            border: 0,
                                                        },
                                                }}
                                            >
                                                <TableCell>
                                                    {rowsPerpage * (page - 1) +
                                                        index +
                                                        1}
                                                </TableCell>

                                                <TableCell>
                                                    {row.firstName}
                                                </TableCell>

                                                <TableCell>
                                                    {row.middleName}
                                                </TableCell>

                                                <TableCell>
                                                    {row.lastName}
                                                </TableCell>

                                                <TableCell>
                                                    {row.phone}
                                                </TableCell>

                                                <TableCell>
                                                    <Grid container>
                                                        <Grid>
                                                            <Button
                                                                onClick={() => {
                                                                    handleEditStaff(
                                                                        row
                                                                    );
                                                                }}
                                                            >
                                                                <BorderColorIcon fontSize="small" />
                                                            </Button>
                                                        </Grid>
                                                        <Grid>
                                                            <Button>
                                                                <BackspaceIcon fontSize="small" />
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>

                            <Grid container justifyContent="center" py={5}>
                                <Grid item>
                                    <Pagination
                                        count={Math.ceil(
                                            staffDetails.length / rowsPerpage
                                        )}
                                        shape="rounded"
                                        onChange={handlePage}
                                        color="secondary"
                                    />
                                </Grid>
                            </Grid>
                        </TableContainer>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default StaffDetails;
