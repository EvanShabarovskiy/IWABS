import { useState } from "react";

export const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => setToggled(!toggled);

  return { toggled, handleToggled };
}