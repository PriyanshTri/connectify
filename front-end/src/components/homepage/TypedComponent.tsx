import React from "react";
import Typed from "typed.js";

export default function TypedComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<h3>Lets dive into the world of social media power</h3>"],
      loop: true,
      typeSpeed: 50,
      loopCount: 10000,
      autoInsertCss: true,

    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="homepage-text">
      <span ref={el} />
    </div>
  );
}


