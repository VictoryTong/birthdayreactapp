import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const TypedComponent = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Happy Birthday Parth",
        "Have a wonderful day",
        "Filled with joy and happiness.",
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
