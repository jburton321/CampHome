import { useState, useEffect } from "react";

export interface ITruckProperty1ChevyProps {
  className?: string;
}

const truckImages = [
  "property_1=chevy.png",
  "property_1=dodge.png",
  "property_1=ford.png",
];

export const TruckProperty1Chevy = ({
  className,
}: ITruckProperty1ChevyProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % truckImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        "flex flex-col gap-0 items-center justify-start shrink-0 relative overflow-visible " +
        className
      }
    >
      {truckImages.map((src, index) => (
        <img
          key={src}
          className={`w-full h-auto transition-opacity duration-1000 ${
            index === 0 ? "" : "absolute inset-0"
          } ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          src={src}
          alt={`Truck ${index + 1}`}
        />
      ))}
    </div>
  );
};
