import { Box, Select, MenuItem } from '@mui/material';
import TranslationInput from './Textfield';
import TranslateButton from './Button';
import TranslationOutput from './TranslationOutput';
import './box.css'
import React, { useState } from 'react';

export default function CenteredBoxes({ text, setText, handleTranslateClick, translation }) {
  const [language, setLanguage] = useState('autodetect');
  const [outputLanguage, setOutputLanguage] = useState('EN'); // Nuevo estado para el idioma de salida

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleOutputLanguageChange = (event) => { // Nuevo controlador para el idioma de salida
    setOutputLanguage(event.target.value);
  };

  return (
    <Box className="outer-box">
      <Box className="language-box">
        <Select value={language} onChange={handleLanguageChange}>
          <MenuItem value={'autodetect'} disabled>Autodetect</MenuItem>
        </Select>
      </Box>
      <Box className="inner-box">
        <TranslationInput value={text} onChange={event => setText(event.target.value)} />
      </Box>
      <Box className="middle-box">
        <TranslateButton onClick={() => handleTranslateClick(outputLanguage)} /> {/* Pasa el idioma de salida al hacer clic */}
      </Box>
      <Box className="inner-box">
        <Box mb={2}>
            <Select  value={outputLanguage} onChange={handleOutputLanguageChange}>   
                <MenuItem value={'EN'}>English</MenuItem>
                <MenuItem value={'ES'}>Spanish</MenuItem>
                <MenuItem value={'DE'}>German</MenuItem>
            </Select>
        </Box>
        <TranslationOutput value={translation} />
      </Box>
    </Box>
  );
}