import React, { FC } from 'react';
import logo from '../assets/logo.png';
import { Box, Container } from '@mui/material';

interface Props {
    children: any;
}

const HeaderLayout: FC<Props> = ({ children }) => {
    return (
        <Box m={2} sx={{ textAlign: 'center' }}>
            <Box my={2}>
                <img
                    src={logo}
                    style={{ maxWidth: '500px', width: '100%' }}
                    alt="logo"
                />
            </Box>
            <Container maxWidth="sm">{children}</Container>
        </Box>
    );
};

export default HeaderLayout;
