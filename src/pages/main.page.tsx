import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import HeaderLayout from '../layout/header.layout';
import GeoForm from '../components/geoForm.components';
import { useNavigate } from 'react-router-dom';

const MainPage: FC = () => {
    const navigate = useNavigate();
    return (
        <HeaderLayout>
            <Box
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: 1,
                    padding: 5,
                }}
            >
                <GeoForm />
            </Box>
            <Box my={2}>
                <Button
                    variant="text"
                    sx={{ color: 'white' }}
                    onClick={() => navigate('/about')}
                >
                    About Me
                </Button>
            </Box>
        </HeaderLayout>
    );
};

export default MainPage;
