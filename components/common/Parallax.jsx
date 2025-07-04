"use client";

import { jarallax } from "jarallax";
import { useEffect } from "react";

export default function ParallaxContainer(props) {
  useEffect(() => {
    jarallax(document.querySelectorAll(".parallax-5"), {
      speed: 0.5,
      imgPosition: "top center",
      imgSize: "cover",
      disableParallax: false
    });
  }, []);
  return (
    <div
      //   ref={parallax.ref}
      {...props}
    >
      {props.children}
    </div>
  );
}
