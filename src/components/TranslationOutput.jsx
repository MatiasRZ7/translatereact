import { TextField } from '@mui/material';
export default function TranslationOutput({ value }) {
  return (
    <TextField 
      className="translation"
      label="Translation" 
      variant="outlined" 
      disabled 
      fullWidth
      multiline
      rows={3}
      value={value} 
    />
  );
}