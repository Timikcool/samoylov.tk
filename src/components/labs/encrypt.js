import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

export const encrypt = () => {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  useEffect(() => {
    setEncryptedText(btoa(text));
    localStorage.setItem('ts-file-encryptedText', encryptedText);
  }, [text]);

  const saveFile = () => {
    if (encryptedText) {
      const blob = new Blob([encryptedText], {
        type: 'text/plain;charset=utf-8'
      });
      saveAs(blob, 'encryption.txt');
    } else {
      const text = localStorage.getItem('ts-file-encryptedText');
      const blob = new Blob([text], {
        type: 'text/plain;charset=utf-8'
      });
      saveAs(blob, 'encryption.txt');
    }

    localStorage.setItem('ts-file-text', text);
    localStorage.setItem('ts-file-encryptedText', encryptedText);
  };

  return (
    <div className="encrypt">
      <h3>Text</h3>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows="10"
        cols="30"
      ></textarea>
      <h3>Encryption</h3>
      <textarea value={encryptedText} rows="10" cols="30" readOnly></textarea>
      <button onClick={saveFile}>Save file</button>
      {/* <button onClick={getFile}>Get file</button> */}
    </div>
  );
};
