import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                height: 500,
            }}
        >
            <Box onClick={() => navigate('/main')} sx={{ cursor: 'pointer' }}>
                <Typography color="white" variant="h6">
                    Are you Lost? Help Me
                </Typography>
            </Box>
        </Box>
    );
};

export default NoPage;
