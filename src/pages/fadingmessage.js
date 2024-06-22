import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

const messages = [
  "Today is...",
  "as beautiful as other days",
  "but you realize",
  "another year has gone",
  "in a blink of the eyes",
  "however",
  "Do you know..?",
  "today is just special",
  "so special",
  "that's why",
  "Let's make it...",
  "the best celebration ever",
  "and let me share...",
  "a piece of happiness to you",
  "I made all this...",
  "as a birthday present to you",
  "without spending a penny",
  "and learning lots of React.",
  "Thanks for the friendship we made,",
  "thanks for the patience you endured for me",
  "thanks for all the love and support you have showered me with.",
  "I wish you all the best",
  "I hope",
  "you'll find...",
  "happiness along the way",
  "keep your spirit up",
  "fill it with your most beautiful smile",
  "the smile that I die for",
  "every single time",
  "Lastly,",
  "Happy Birthday, Parth",
];

export const MessageList = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentMessageIndex]);
  return (
    <div>
      <div className="message-container">
        <TransitionGroup>
          <CSSTransition
            key={currentMessageIndex}
            timeout={2000} // Duration of the fade transition
            classNames="fade"
          >
            <span>{messages[currentMessageIndex]}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
