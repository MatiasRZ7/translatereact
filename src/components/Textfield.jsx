import { TextField } from '@mui/material';
import React from 'react';

export default function TranslationInput({ value, onChange }) {
  return (
    <TextField
      className="translation-input"
      label="Translate this text"
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      multiline
      rows={3.5}
      style={{ fontSize: 'large'}}
    />
  );
}