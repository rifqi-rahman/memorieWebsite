"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function MotionProvider() {
  useEffect(() => {
    document.body.classList.add("home-snap");

    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 90,
    });

    const onResize = () => AOS.refreshHard();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("home-snap");
    };
  }, []);

  return null;
}
