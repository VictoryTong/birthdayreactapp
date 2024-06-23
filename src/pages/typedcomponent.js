import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const TypedComponent = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
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
      ], // The strings you want to type
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedElement}></span>
    </div>
  );
};
