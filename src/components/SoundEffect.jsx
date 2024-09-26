import React, { useState } from 'react';

const SoundEffect = ({ children, soundUrl }) => {
  const [audio] = useState(new Audio(soundUrl));

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div onMouseEnter={playSound}>
      {children}
    </div>
  );
};

export default SoundEffect;