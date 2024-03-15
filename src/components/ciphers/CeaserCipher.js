import React, { useState } from "react";
import "./ceaser-cipher.css"; // Import CSS for styling (you can create this file)

const CaesarCipher = () => {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(0);
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [animation, setAnimation] = useState([]);
  const [isEncrypting, setIsEncrypting] = useState(false);

  // Function to perform Caesar Cipher encryption
  const encrypt = (text, shift) => {
    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
          return char;
        }
      })
      .join("");
  };

  // Function to handle message change
  const handleChangeMessage = (e) => {
    if (!isEncrypting) {
      setMessage(e.target.value);
    }
  };

  // Function to handle shift change
  const handleChangeShift = (e) => {
    setShift(parseInt(e.target.value));
  };

  // Function to animate the cipher transformation
  const animateCipher = () => {
    setIsEncrypting(true);
    setAnimation([]); // Reset animation array
    let animationArray = [];
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      animationArray.push({ char, animated: false });
    }
    setAnimation(animationArray);

    let encrypted = "";
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const encryptedChar = encrypt(char, shift);
      setTimeout(() => {
        setAnimation((prevAnimation) => {
          const updatedAnimation = [...prevAnimation];
          updatedAnimation[i].char = encryptedChar.toUpperCase();
          updatedAnimation[i].animated = true;
          return updatedAnimation;
        });
      }, i * 300);
      encrypted += encryptedChar;
    }
    setEncryptedMessage(encrypted.toUpperCase());
    setTimeout(() => {
      setIsEncrypting(false);
    }, message.length * 300);
  };

  // Function to handle clearing the fields
  const handleClear = () => {
    setMessage("");
    setShift(0);
    setEncryptedMessage("");
    setAnimation([]);
    setIsEncrypting(false);
  };
  // JSX for the component
  return (
    <div className="container-fluid mt-5 p-5 d-flex justify-content-center align-items-center flex-column">
      <div className="">
        <h2>Caesar Cipher</h2>
        <div className="text-end">
          <div>
            <label>Message:</label>
            <input
              type="text"
              value={message}
              onChange={handleChangeMessage}
              disabled={isEncrypting}
              onKeyPress={(e) => {
                const charCode = e.charCode;
                if (
                  !(charCode >= 97 && charCode <= 122) && // a-z
                  charCode !== 0 &&
                  !(charCode === 32) // Allow space
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className="">
            <label>Shift:</label>
            <input
              type="number"
              value={shift}
              disabled={isEncrypting}
              onChange={handleChangeShift}
            />
          </div>
        </div>
        <div className="text-center p-2 d-flex justify-content-around">
          <button onClick={animateCipher} disabled={isEncrypting}>
            Encrypt
          </button>
          <button onClick={handleClear} disabled={isEncrypting}>
            Clear
          </button>
        </div>
      </div>
      <div className="array-container w-100 d-flex justify-content-center border-top border-dark pt-5">
        {animation.map((item, index) => (
          <div
            key={index}
            className={`array-item ${item.animated ? "animated" : ""}`}
          >
            {item.char}
          </div>
        ))}
      </div>
      <div>
        <h5>Encrypted Message: {encryptedMessage} </h5>
      </div>
    </div>
  );
};

export default CaesarCipher;
