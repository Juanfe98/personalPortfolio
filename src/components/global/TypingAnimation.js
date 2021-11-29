import React from "react";
import Typed from "typed.js";

export const TypingAnimation = ({
  phrases = [],
  typeSpeed = 100,
  backSpeed = 100,
}) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: phrases,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: true,
      loopCount: Infinity,
    };

    // if the phrases are null then return
    if (phrases.length === 0) return;

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} />;
};
