import React, { useState } from 'react';
import BannerBackground from '../assets/dtbackg.png';
const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  let [s,setS]=useState('Start Listening');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    setS('Listening..')
    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const currentTranscript = event.results[0][0].transcript;
      setTranscript(currentTranscript);
      setS('Start Listening')
    };

    recognition.onend = () => {
      setIsListening(false);
      setS('Start Listening')
    };

    recognition.start();
  };

  return (
    <div>
      <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='Copenhagen, Denmark'/>
                </div>
      <h1 className='primary1-heading'>Your Feedback Is Important To us</h1>
      <br></br>
      <button className='primary-button' onClick={startListening} disabled={isListening}>
        {s}
      </button>
      <br></br>
      <p className='primary1-text'>Feedback: <br></br>{transcript}</p>
      <p className='primary-text'>Thank you for choosing EnviGo! We deeply appreciate your trust and support. Our mission is to provide you with a seamless and enjoyable experience, and we are continually working to enhance our app based on your feedback. Your satisfaction is our utmost priority, and we're here to assist you every step of the way. We hope you find great value and convenience in using our app. If you have any questions, suggestions, or concerns, please don't hesitate to reach out to our dedicated support team. Once again, thank you for being a valued member of our EnviGo community. We look forward to serving you again soon!</p>
    </div>
  );
};

export default SpeechToText;