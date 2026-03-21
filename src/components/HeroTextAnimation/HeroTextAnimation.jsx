import { useState, useEffect } from 'react';
import './HeroTextAnimation.css';

const phrases = [
  "Building scalable systems",
  "Designing clean interfaces",
  "Optimizing performance",
  "Delivering real-world solutions"
];

export default function HeroTextAnimation() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // 100ms average

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Setup typing speed
      let speed = isDeleting ? 25 : 40 + Math.random() * 40;

      if (!isDeleting && text === fullText) {
        // Pause at end of sentence
        speed = 1200;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 400; // Pause before next sentence
      }

      setTypingSpeed(speed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="hero-text-anim-container">
      <h1 className="hero-text-anim">
        {text}
        <span className="blinking-cursor">|</span>
      </h1>
    </div>
  );
}
