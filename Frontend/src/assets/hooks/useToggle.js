import { useState } from "react";

export const useToggle = reset => {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled(!toggled);
    reset();
  }

  return { toggled, handleToggled };
}