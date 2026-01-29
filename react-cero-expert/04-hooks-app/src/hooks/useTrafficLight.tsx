import { useEffect, useState } from 'react'


const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

// type LightColors = "red" | "yellow" | "green";
type LightColors = keyof typeof colors;


export const useTrafficLight = () => {

const [light, setLight] = useState<LightColors>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

    const idTimeout = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(idTimeout);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;

    // Usamos setTimeout para diferir el setState y evitar renderizados en cascada
    const timeoutId = setTimeout(() => {
      switch (light) {
        case "red":
          setLight("green");
          break;
        case "green":
          setLight("yellow");
          break;
        case "yellow":
          setLight("red");
          break;
      }
      setCountdown(5); // Reinicia el temporizador
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [countdown, light]);
  return {
    // values
    light,
    countdown,
    colors,
    // methods

    // computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors[light] : "bg-gray-500",
    redLight: light === "red" ? colors[light] : "bg-gray-500",
    yellowLight: light === "yellow" ? colors[light] : "bg-gray-500",
  }
}
