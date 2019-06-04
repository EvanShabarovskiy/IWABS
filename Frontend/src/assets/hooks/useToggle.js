import { useState, useEffect } from "react";

const { style } = document.body;

export const useToggle = reset => {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled(!toggled);
    reset();
  }

  useEffect(() => {
    if (toggled) {
      style.overflow = 'hidden';
    } else {
      style.overflow = 'visible';
    }
  }, [toggled]);

  return { toggled, handleToggled };
}