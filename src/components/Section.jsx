import PixelToRem from "./PixelToRem";
import { useState } from "react";
import RemToPixel from "./RemToPixel";

const Section = () => {
  const [pixel, setPixel] = useState(16);
  const [rem, setRem] = useState(1);
  const [isPxToRem, setIsPxToRem] = useState(true);

  const handlePixelChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setPixel(val);
    setRem((val / 16).toFixed(2));
  };

  const handleREMChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setRem(val);
    setPixel(val * 16);
  };

  const swapConverter = () => setIsPxToRem(!isPxToRem);

  return (
    <section className="flex flex-col gap-10 justify-center items-center h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-extralight">
        {isPxToRem ? "PX to REM Converter" : "REM to PX Converter"}
      </h1>
      {isPxToRem ? (
        <PixelToRem
          pixel={pixel}
          handlePixelChange={handlePixelChange}
          swapConverter={swapConverter}
          rem={rem}
          handleREMChange={handleREMChange}
        />
      ) : (
        <RemToPixel
          pixel={pixel}
          handlePixelChange={handlePixelChange}
          swapConverter={swapConverter}
          rem={rem}
          handleREMChange={handleREMChange}
        />
      )}

      <p className="text-sm text-gray-400">
        Calculation based on a root font-size of 16 pixel.
      </p>
    </section>
  );
};

export default Section;
