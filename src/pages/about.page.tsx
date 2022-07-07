import { Box, Button, Avatar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpeg';

const About = () => {
    const navigate = useNavigate();

    return (
        <Box my={10}>
            <Box
                sx={{
                    maxWidth: 500,
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 2,
                    textAlign: 'center',
                    margin: '0 auto',
                }}
            >
                <Avatar
                    sx={{ width: 240, height: 240, margin: '0 auto' }}
                    alt="Eric Cavazos"
                    src={profile}
                />
                <Box my={4}>
                    <Typography variant="h5">About Me</Typography>
                    <Typography variant="subtitle1">
                        I have worked in several startups, for the past 14
                        years. I have worked several positions from hands-on to
                        being a director. I am looking for a new opportunity to
                        grow with a company. I have a passion for development
                        and enjoy working on projects and learning the latest
                        methodologies.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    className="menu-link pointer m-t-l"
                    onClick={() => navigate('/')}
                >
                    Back to Main
                </Button>
            </Box>
        </Box>
    );
};

export default About;
