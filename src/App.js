import { useEffect, useState } from "react";
import { CalculatePage } from "./CalculatePage";
import { Setting } from "./Setting";

export default function App() {
  const Complete = localStorage.getItem("Complete");
  const [complete, setComplete] = useState(Complete);

  const onComplate = (e) => {
    localStorage.setItem("Complete", true);
    setComplete(true);
  };

  return complete ? <CalculatePage /> : <Setting onComplate={onComplate} />;
}
