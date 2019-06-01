import { useState, useEffect } from "react";

const { style } = document.body;

export const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => setToggled(!toggled);

  useEffect(() => {
    if (toggled) {
      style.overflow = 'hidden';
    } else {
      style.overflow = 'visible';
    }
  }, [toggled]);

  return { toggled, handleToggled };
}