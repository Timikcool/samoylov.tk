import React, { useState, useEffect } from 'react';
const prKey =
  '-----BEGIN RSA PRIVATE KEY----- MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd 8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5 rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876 -----END RSA PRIVATE KEY-----';
const pubKey =
  '-----BEGIN PUBLIC KEY----- MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76 xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4 gwQco1KRMDSmXSMkDwIDAQAB -----END PUBLIC KEY-----';
const RSA = () => {
  const [privateKey, setPrivateKey] = useState(prKey);
  const [publicKey, setPublicKey] = useState(pubKey);
  const [userText, setUserText] = useState('This is a test!');

  const encryptUserText = () => {
    const encrypt = new window.JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(userText);

    // Decrypt with the private key...
    // var decrypt = new window.JSEncrypt();
    // decrypt.setPrivateKey($('#privkey').val());
    // var uncrypted = decrypt.decrypt(encrypted);

    // // Now a simple check to see if the round-trip worked.
    // if (uncrypted == $('#input').val()) {
    //   alert('It works!!!');
    // } else {
    //   alert('Something went wrong....');
    // }
  };
  useEffect(() => {
    setResult(encryptUserText());
  }, [publicKey, userText, privateKey]);

  const [result, setResult] = useState(encryptUserText());
  return (
    <div>
      <textarea
        id="privkey"
        rows="10"
        cols="40"
        onChange={e => setPrivateKey(e.target.value)}
        value={privateKey}
      ></textarea>
      <textarea
        id="pubkey"
        rows="10"
        cols="40"
        onChange={e => setPublicKey(e.target.value)}
        value={publicKey}
      ></textarea>
      <h3>Text to encrypt:</h3>
      <textarea
        id="input"
        name="input"
        type="text"
        value={userText}
        onChange={e => setUserText(e.target.value)}
      ></textarea>
      <h3>Result</h3>
      <textarea rows="10" cols="40" readOnly value={result}></textarea>
    </div>
  );
};
export default RSA;
