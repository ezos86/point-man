import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import api from '../services/axios.services';
import * as yup from 'yup';
import { useFormik } from 'formik';

const GeoForm: FC = () => {
    const [status, setStatus] = useState<any>(null);
    const [message, setMessage] = useState<string>('');
    // form field value validation schema.cast(value, { stripUnknown: true})
    const validationSchema = yup.object().shape({
        lng: yup.string().required('Longitude is required'),
        lat: yup.string().required('Latitude is required'),
    });

    const initialValues = {
        lng: '',
        lat: '',
    };

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            setStatus('loading');
            try {
                const zone = await api.get(
                    '/get-time-zone?by=position&lng=' +
                        values.lng +
                        '&lat=' +
                        values.lat
                );
                setStatus('success');
                console.log(zone.data);
                if (zone.data && zone.data.status == 'FAILED') {
                    setMessage(zone.data.message);
                } else if (zone.data && zone.data.status == 'OK') {
                    setMessage(zone.data.zoneName);
                } else {
                    setMessage('Unknown Error');
                }
            } catch (error: any) {
                alert(error);
            }
        },
    });

    return (
        <Box>
            <Box mb={4}>
                <Typography variant="h6">
                    Enter longitude and latitude and get the timezone.
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ maxWidth: '400px', margin: 'auto' }}>
                    <Box my={2}>
                        <TextField
                            name="lng"
                            label="Longitude"
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                            defaultValue={values.lng}
                            helperText={touched.lng && errors.lng}
                            error={Boolean(touched.lng && errors.lng)}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            name="lat"
                            label="Latitude"
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                            defaultValue={values.lat}
                            helperText={touched.lat && errors.lat}
                            error={Boolean(touched.lat && errors.lat)}
                        />
                    </Box>
                    <Button type="submit" variant="contained" fullWidth>
                        Submit
                    </Button>
                </Box>
            </form>
            {status == 'success' ? (
                <Box p={3} mt={6} sx={{ backgroundColor: '#5848DB' }}>
                    <Typography variant="h4" color="white">
                        {message}
                    </Typography>
                </Box>
            ) : status == 'loading' ? (
                <Box p={3} mt={6}>
                    <CircularProgress />
                </Box>
            ) : null}
        </Box>
    );
};

export default GeoForm;
