import { useState } from 'react';
import './App.css';
import translateText from './components/Apirequest';
import CenteredBoxes from './components/box';

function App() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  function handleTranslateClick(outputLanguage) {
    if (typeof text !== 'string') {
      console.error('Error: el texto a traducir debe ser un string');
      return;
    }
  
    translateText(text, outputLanguage)
      .then(translatedText => {
        setTranslation(translatedText);
        setText('');
      })
      .catch(error => {
        console.error('Error al traducir el texto:', error);
      });
  }

  return (
    <div className="App">
      <CenteredBoxes 
        text={text} 
        setText={setText} 
        handleTranslateClick={handleTranslateClick} 
        translation={translation} 
      />
    </div>
  );
}

export default App;