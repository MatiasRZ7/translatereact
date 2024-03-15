import { Button } from '@mui/material';
import React from 'react';

export default function TranslateButton({ onClick }) {
return (
    <Button 
        variant="contained" 
        onClick={onClick}
        sx={{
            backgroundColor: 'lightblue',
            color: 'black', // Add color black for the letters
            '&:hover': {
                backgroundColor: 'aqua',
            },
        }}
    >
        Translate
    </Button>
);
}