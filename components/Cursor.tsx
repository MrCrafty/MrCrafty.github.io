import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Cursor = () => {
  const [cursorPos, setPos] = useState({ x: 0, y: 0 });
  const logMousePosition = (e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <>
      <motion.div
        animate={{
          position: "fixed",
          top: cursorPos.y,
          left: cursorPos.x,
          translateX: "-50%",
          translateY: "-50%",
          height: 15,
          width: 15,
          borderRadius: 100,
          backgroundColor: "transparent",
          transition: { duration: 0.05 },
        }}
        style={{ backdropFilter: "invert(100%)", pointerEvents: "none" }}
      ></motion.div>
      <motion.div
        animate={{
          position: "fixed",
          top: cursorPos.y,
          left: cursorPos.x,
          translateX: "-50%",
          translateY: "-50%",
          height: 50,
          width: 50,
          borderRadius: 100,
          borderWidth: "2px",
          backgroundColor: "transparent",
          transition: { duration: 0.2 },
        }}
        style={{ pointerEvents: "none" }}
      ></motion.div>
    </>
  );
};

export default Cursor;
